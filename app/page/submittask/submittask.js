
var template = require('html-loader!./submittask.html');

require('./submittask.less');

module.exports = {
 	render: function () {

 		$('.page-content-wrapper').html(template);
 		this.bind();
 	},
 	bind: function () {

 		var dropZone = document.getElementById('drop_zone');
		dropZone.addEventListener('dragover', this.dragOver, false);
		dropZone.addEventListener('drop', this.fileSelect, false);
 	},

 	fileSelect:function(evt) {

	  evt.stopPropagation();
	  evt.preventDefault();

	  var files = evt.dataTransfer.files; // 文件对象
	  var output = [];

	  // 处理多文件
	  for (var i = 0, f; f = files[i]; i++) {
	    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
	                f.size, ' bytes, last modified: ',
	                f.lastModifiedDate.toLocaleDateString(), '</li>');
	  }
	  // 显示文件信息
	  document.getElementById('list').innerHTML = output.join('');
	},

	dragOver: function(evt) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  evt.dataTransfer.dropEffect = 'copy';
	}
};