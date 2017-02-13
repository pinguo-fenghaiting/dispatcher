var template = require('html-loader!./mytask.html');
require('./mytask.less');

module.exports = {

 	render: function () {
 		
 		$('.page-content-wrapper').html(template);
 		this.bind();
 	},

 	bind: function () {
 		var me = this;
 		
 		$(".download-btn").on('click' ,function(){
 			
 			var imgCount = $('.img-count').val();
 			imgCount =  +imgCount;

 			//validate input value
 			me.validateInput(imgCount);

 		})
 	},

 	validateInput: function(inputVal) {

 		$('.error-info').text('');
 		$('.warn-info').text('');


		if( isNaN(inputVal) ){

			$('.error-info').text("输入非法，清楚输入合法数字");

		}else if (!inputVal){
			$('.warn-info').text("输入为空，清楚输入合法数字");
		}

		if(inputVal > 10 ){
			
		}

 	}
};