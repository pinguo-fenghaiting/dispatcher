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

		if( isNaN(inputVal) ){

			this.showValidateInfo('error' , "输入非法，清楚输入合法数字");	

		}else if (!inputVal){

			this.showValidateInfo('warn' , "输入为空，清楚输入合法数字");

		}
		if(inputVal > 10 ){

		}
 	},

 	showValidateInfo: function( type, info ){

 		var errorInfo = $('.error-info');
 		var warnInfo  = $('.warn-info');
 		var inputWrapper = $('.input-wrapper');
 		var warnWrapper  = $('.warn-wrapper');
 		var errorWrapper = $('.error-wrapper');

 		errorInfo.text('');
 		warnInfo.text('');
 		inputWrapper.addClass('has-error');

 		if(type && type === 'warn'){
 			
 			errorWrapper.css('display' ,'none');
 			warnWrapper.css('display' ,'block');

			warnInfo.text(info);

 		}else if (type && type === 'error'){

 			warnWrapper.css('display'  ,'none');
 			errorWrapper.css('display' ,'block');

 			errorInfo.text(info);
 		}
 	}
};