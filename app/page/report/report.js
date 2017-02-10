var template = require('html-loader!./report.html');
 require('./report.less');

module.exports = {
 	render: function () {
 		$('.page-content-wrapper').html(template);
 		this.bind();
 	},
 	bind: function () {
 		//bind Dom Event
 	},
};