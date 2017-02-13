/* jshint devel:true */

require('./index.less');
var template = require('html-loader!./index.html');

//widget 
var header = require('Widget/header/header') ;
var menu   = require('Widget/menu/menu') ;
var cookie = require('Widget/cookie/cookie');

//page 
var mytask = require('Page/mytask/mytask') ;

module.exports = {

    render: function () {

    	var username =  cookie.getCookie('username');
    	
    	if(username){

    		$('.root').html(template);

	    	header.render();
	    	menu.render();
	    	mytask.render();

    	}else{
    		location.hash = "#login";
    	}

    	
    } 
}
