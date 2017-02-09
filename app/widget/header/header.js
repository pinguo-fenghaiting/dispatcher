var template = require('html-loader!./header.html');
 require('./header.less');

module.exports = {
 	render: function () {
 		
 		$('.page-header').html(template);
 		this.bind();
 	},
 	bind: function () {
 		//bind Dom Event
 	},
};