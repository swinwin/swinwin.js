;(function($, window, document){


	function AjaxFormHandler(id){
		
		var _instance = this;
		var _$form = $(id)
		
		this.onData = 'ONDATA';
		this.data = null;
		
		init();
		
		function init(){
			_$form.submit(_instance, function(event){onSend(event); return false})
		}
		
		function onSend(event){
			
			var data = new Object();
			var action = _$form.attr('action');
			var type = _$form.attr('method');
			
			_$form.children('input, select').each(function(i) {
				var o = new Object();
				 $.each(this.attributes, function(i, attrib){
				    o[attrib.name] = attrib.value;
				  });
				  o['value'] = $(this).val();
				  if(o.placeholder == $(this).val()) o['value'] = ""
				  data[this.name]= o;
			 });
			
		    $.ajax({
			  type: type,
			  url: action,
			  data: data,
			  success: success,
			  dataType: 'JSON'
			});
		}
		
		function success(data){
			_instance.data = data;
			$(_instance).trigger(_instance.onData);
		}
		
	}
	
	window.AjaxFormHandler = AjaxFormHandler;	

}(jQuery, window, document));
