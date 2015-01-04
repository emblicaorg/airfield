# Airfield
Simple [hipache](https://github.com/dotcloud/hipache) web-interface

- Check packages from `package.json`
- Requires of course hipache and redis installed on same server with airfield

## Setup
*After downloading source:*

	cd airfield
	npm install
	node airfield.js

Then you can go to [http://server.com:3000/](http://server.com:3000/)

Default login credientials are:

	User: admin
	Pass: kissa2

You can change those by modifying `settings.js`.

### Warning!
Currently authentication is broken so there is not really any kind of session management.
You have to implement **checkAuth**-middleware to check if user is logged in, **login** and **logout** routines.

## Openstack support

If you are doing lots of proxying to OpenStack instances, you can enable openstack-support.
The management console uses openstack-api to fetch ips, names and statuses of all instances.
This feature is tested with Folsom.
All you have to do is enable it from **settings.js** and change the login credientials in the same file.

**If you are using this for a real purpose not just testing, tweak other settings too.**

## ToDo

 * Better AJAX-message construction
 * Authentication
 * Statistics
 * Search
 * Paging
