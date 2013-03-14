# Airfield
Simple [hipache](https://github.com/dotcloud/hipache) web-interface

Check packages from package.json
Requires ofcourse hipache and redis installed for same server with airfield

## Setup
*After downloading source:*

	cd airfield
	npm install
	node airfield.js

Then you can go to [http://server.com:3000/](http://server.com:3000/)

Default login credientials are:

	User: admin
	Pass: kissa2

You can change those modifying **settings.js**-file

## Openstack support

If you are doing lot's of proxying to Openstack instances, you can enable openstack-support.
The management console uses openstack-api to fetch ips, names and statuses of all instances.
This feature is tested with Folsom.
All you have to do is enable it from **settings.js** and change the login credientials in the same file.

**If you are using this for a real purpose not just testing, tweak other settings too.**

## ToDo

 * Better AJAX-message construction
 * Statistics
 * Search
 * Paging
