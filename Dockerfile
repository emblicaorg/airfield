from ubuntu:12.04
maintainer Nick Stinemates

run apt-get -y update
run apt-get install -y wget 
run wget -O - http://nodejs.org/dist/v0.8.23/node-v0.8.23-linux-x64.tar.gz | tar -C /usr/local/ --strip-components=1 -zxv
add . /airfield
run cd /airfield && npm install

expose 3000

cmd ["node", "/airfield/airfield.js"]
