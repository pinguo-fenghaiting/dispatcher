/* jshint devel:true */

require('./index.less');
var template = require('html-loader!./index.html');

//widget 
var header = require('Widget/header/header') ;
var menu   = require('Widget/menu/menu') ;

//page 
var mytask = require('Page/mytask/mytask') ;

module.exports = {

    render: function () {
    	
    	$('.root').html(template);

    	header.render();
    	menu.render();
    	mytask.render();
    	
    } 
}
