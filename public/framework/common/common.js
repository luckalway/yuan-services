Yuan = {};
Yuan.skin = {};
Yuan.skin.showError = function(id, title, msg){
	var container = $('#'+id);
	if(!container.hasClass('alert')){
		container.addClass('alert');
	}
	
	if(!container.hasClass('alert-danger')){
		container.addClass('alert-danger');
	}
	
	container.html('<a class="close" data-dismiss="alert">×</a><strong>'+title+':</strong>'+msg);
	setTimeout(function(){
		container.hide();
	}, 3000);
}

$(document).ready(function() {
	if($.fn.editable){
		$.fn.editable.defaults.mode = 'inline';
		$.fn.editable.defaults.ajaxOptions = {type: "PUT"};
		
		$('.editable').editable();
	}

	$(".date").datepicker({
		dateFormat : "yy-mm-dd"
	});
   
});
