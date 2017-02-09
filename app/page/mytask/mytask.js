var template = require('html-loader!./mytask.html');
require('./mytask.less');

module.exports = {
 	render: function () {
 		
 		$('.page-content-wrapper').html(template);
 		this.bind();
 	},
 	bind: function () {
 		//bind Dom Event
 		$(".downloadImg").on('click' ,function(){
 			
 			var imgCount = $('.img-count').val();
 			imgCount =  +imgCount;
 			// console.log(imgCount);
 			if( typeof imgCount !== 'number' 
 				|| isNaN(imgCount)){

 				$('.errInfo').text("输入错误，清楚输入合法数字")
 			}
 		})
 	},
};