
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var async = require('async');
var redis = require('redis');
var db = redis.createClient();

var cons = require('consolidate');
var swig = require('swig');

var app = express();

var settings = {username: "admin", password: "kissa2", port: 3000};

app.configure(function(){
  app.set('port', process.env.PORT || settings.port);
  app.set('views', __dirname + '/views');
  console.log(__dirname);
  app.engine('.html', cons.swig);
  app.set('view engine', 'html');
  swig.init({
	root: __dirname + '/views',
	allowError: true	
  }); 
// app.set('view options', layout: false);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  //app.use(express.basicAuth('username', 'password'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);


// Authentication mechanism
function checkAuth(req, res, next){
	if(!req.session.user_id){
		res.redirect('/login');
	}else{
		next();
	}
}

app.get('/login', function(req, res){
	res.render('login.html', {title:'Login'});
});

app.post('/login', function(req, res){
	var post = req.body;
	if(post.user == settings.username && post.password == settings.password){
		req.session.user_id = "loggedin";
		res.redirect('/routes');
	}else{
		res.send("Your login credientials are invalid!");
	}
});

app.get('/logout', function(req, res){
	delete req.session.user_id;
	res.redirect("/login");
});

//Render few variables of routes
app.get('/routes', checkAuth, function(req, res){
	res.render("routes.html", {title: 'Routes'});
});

// Get all routes from redis [ajax]
app.get('/ajax/routes', checkAuth, function(req, res){
	db.keys('frontend:*', function(err, routes){
		var routelist = [];
		async.forEach(routes, function(item, cb){
			db.lrange(item, 0, -1, function(err, items){
				if(err){
					cb(err);
				}
				var route = {name: item, items: items};
				routelist.push(route);
				cb();
			});
		}, function(err){
			if(err){
				console.log(err);
			}
			//console.log(routelist);
			res.send(routelist);
		});		
	});
});

// Saves route [ajax]
app.post('/ajax/save', checkAuth, function(req, res){
	//console.log(req.body.data);
	var data = req.body.data;
	db.del(data.route, function(err){
		db.rpush(data.route, data.name, function(err){
			if(err){
				console.log(err);
			}
			for(i in data.hosts){
				db.rpush(data.route, data.hosts[i]);
			}
		});
	});
	res.send('{"response":"OK"}');
});

// Removes route [ajax]
app.post('/ajax/remove', checkAuth, function(req, res){
	var key = req.body.key;
	db.del(key, function(err){
		if(err){
			console.log(err);
		}else{
			res.send('{"response":"OK"}');
		}
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
