/*
	settings.js
	You should set these before use

	Username
		Username of airfield
	Password
		Password of airfield
	Port
		Port of airfield
	cookieSecret
		secret which is used to encrypt cookies
	sessionSecret
		^ same than earlier but for sessions
	enable_openstack
		If you want to enable openstack support then change this to true
	os_api_username
		Openstack username (only required if openstack is enabled)
	os_api_password
		Openstack password (only required if openstack is enabled)
	os_api_tenant
		Airfield is fetching info about every instance but this is needed for authentication
	os_keystone_url
		Keystone api url
	os_nova_url
		Nova api url
	redis
		Redis settings
*/

exports.settings = {
<<<<<<< HEAD
                                        username: "admin",
                                        password: "kissa2",
                                        port: 443,
                                        cookieSecret: "hurrdurr",
                                        sessionSecret: "changeit",
                                        enable_openstack: false,
                                        os_api_username: "admin",
                                        os_api_password: "apipasswd",
                                        os_api_tenant: "c04653e8b9b4461285e9",
                                        os_keystone_url: "http://10.0.0.1:5000",
                                        os_nova_url: "http://10.0.0.1:8774",
                                        redis: {
						host: "172.16.42.1",
						port: 6379
						}
					};

=======
    username: "admin",
    password: "kissa2",
    port: 3000,
    cookieSecret: "thisissecret",
    sessionSecret: "secretisthistoo",
    enable_openstack: false,
    os_api_username: "admin",
    os_api_password: "goodopenstackpassword",
    os_api_tenant: "tenantidofinstances",
    os_keystone_url: "http://10.0.0.1:5000",
    os_nova_url: "http://10.0.0.1:8774"
};
>>>>>>> f920d23099dba2ea75b081cabc4914cb534c80d7
