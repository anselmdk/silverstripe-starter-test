<?php
define('SS_DATABASE_SERVER', 'localhost');
define('SS_DATABASE_USERNAME', 'root');
define('SS_DATABASE_PASSWORD', 'root');
define('SS_DATABASE_NAME', 'silverstripestartertest');

//enable this for SilverStripe 3.2+
//define('SS_DATABASE_CLASS', 'MySQLPDODatabase');

define('SS_ENVIRONMENT_TYPE', 'live');

define('SS_DEFAULT_ADMIN_USERNAME', 'noreply@title.dk');
define('SS_DEFAULT_ADMIN_PASSWORD', 'xxxx');

//error log - the first line seems to be the proper one
//you might need to create silverstripe.log though, and give it the proper permissions
define('SS_ERROR_LOG', '../logs/silverstripe.log');
//define('SS_ERROR_LOG', __DIR__ . '/logs/silverstripe.log');


global $_FILE_TO_URL_MAPPING;
$_FILE_TO_URL_MAPPING['/Users/anselm/git-repos/current/silverstripe-starter-test/public'] = 'http://silverstripestartertest:8888';



//FOR TEST SITES:

//Protect the site with basic auth
//define('SS_USE_BASIC_AUTH', true);

//Emailing
//define('SS_SEND_ALL_EMAILS_TO', '');
//define('SS_SEND_ALL_EMAILS_FROM', '');


//find more configuration options here:
//http://doc.silverstripe.org/framework/en/topics/environment-management
//https://gist.github.com/ryanwachtl/5793212



