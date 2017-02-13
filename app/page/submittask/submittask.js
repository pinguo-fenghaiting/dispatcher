
var template = require('html-loader!./submittask.html');
var Alert    = require('Widget/alert/alert'); 
var Util     =  require('Widget/util/util'); 
var dataModel = require('Widget/dataModel/dataModel');
var serverConfig = require('../../config/serverConfig');

require('./submittask.less');

module.exports = {

	FileList : [],

 	render: function () {

 		$('.page-content-wrapper').html(template);
 		this.bind();
 	},
 	bind: function () {

 		var me = this ;
 		var dropZone = document.getElementById('drop_zone');
		dropZone.addEventListener('dragover', this.dragOver, false);
		dropZone.addEventListener('drop', this.fileSelect.bind(me), false);

		$('.cancel').on('click' , function(){
			me.FileList.length = 0;
			$('#list').html('');
			var opt = {
				wrapper : 'dispacther-page-submittask',
				info    : '已清除上传图片，请重新上传',
				type    : 'success'
			}
			Alert.show(opt);
		})

		$('.submit').on('click',function(){

			var url = serverConfig['host'] + serverConfig['commit'];
		 // 	xhr = new XMLHttpRequest(); 
			// xhr.open("post", url, true); 
			// xhr.setRequestHeader("Content-Type", "multipart/form-data"); 
			         
			var formData = new FormData(); 
			for(var i = 0 ;i < me.FileList.length ; i++){
				formData.append('files[]',me.FileList[i] ); 
			}
			// xhr.send(fd); 
			$.ajax({
			    url: url,
			    type: 'POST',
			    data: formData,
			    processData: false,
			    contentType: false
			});
					            

		})
 	},

 	fileSelect:function(evt) {

		evt.stopPropagation();
		evt.preventDefault();

		var files = evt.dataTransfer.files; 
		var output = [];

		
		files = Array.prototype.slice.call(files) ; 

		this.FileList = this.FileList.concat(files);
		this.FileList = Util.unique(this.FileList);

		this.validateFile(this.FileList);

		for (var i = 0, f; f = files[i]; i++) {

		    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
		                f.size, ' bytes, last modified: ',
		                f.lastModifiedDate.toLocaleDateString(), '</li>');
	    }

	    output = output.join('') ;
		$('#list').append(output);

	},

	validateFile:function(files){
		
		var len =  files.length ;

		if(len > 20 ){

			var opt = {
				wrapper : 'dispacther-page-submittask',
				info    : '一次性上传不要超过10条',
				type    : 'warn'
			}
			Alert.show(opt);
		}
		for ( var item in files) {
			if(item.type !== 'png' 
				|| item.type !== 'jpg'
				|| item.type !== 'gif' ){

				var opt = {
					wrapper : 'dispacther-page-submittask',
					info    : '上传图片格式有误,请检查后重新上传',
					type    : 'warn'
				}
				Alert.show(opt);
			}
		}

	},


	dragOver: function(evt) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  evt.dataTransfer.dropEffect = 'copy';
	}
};