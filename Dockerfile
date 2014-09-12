from ubuntu:latest
maintainer Nick Stinemates

run apt-get -y update
run apt-get install -y wget nodejs nodejs-legacy npm
add . /airfield
run cd /airfield && npm install

expose 3000

cmd ["node", "/airfield/airfield.js"]
