var template = require('html-loader!./login.html');
var dataModel = require('Widget/dataModel/dataModel');
var cookie = require('Widget/cookie/cookie')
 require('./login.less');

module.exports = {
 	render: function () {
 		
	 	var c_username = cookie.getCookie('username');
		if(c_username){
		 	location.hash = '#index'; 
		}
 		$('.root').html(template);
 		this.bind();
 	},
 	bind: function () {
 		//bind Dom Event

 		$('.login-btn').on('click' ,function(){


 			 var username = $('.username').val() || '';
 			 var passwd = $('.password').val() || '';

 			 var opt = {
 			 	 data : {
 			 	 	username : username,
 			 	 	passwd   : passwd,
 			 	 },
 			 	 method : 'POST',
 			 	 type  : 'login'
 			 }

 			 dataModel.getData(opt).then(function(data){

 			 	var c_opt = {
 			 		c_name : 'username',
 			 		value  : data.username,
 			 		expiredays : 5 * 60 * 60 * 1000
 			 	}
 			 	cookie.setCookie(c_opt);

 			 	location.hash = '#index'; 
 			 });

 		})
 	},
};