(function($) {
	$.fn.detectQuirksMode = function(userOptions) {
		var defaults = {};
		
		var defaults = $.extend(defaults, userOptions),
		target = this;
		
		if(!(document.compatMode == 'CSS1Compat')) {
			var $body = $('body');
			var title = $('<p>Awe-shee-et!<br /></p>');
			var message = $('<span>- Quirks Mode Strikes Again -</span>');
			$body.empty();
			$body.append(title);
			title.append(message);
			title.css({
				'color' : 'red',
				'text-align' : 'center',
				'font-size' : '30px',
				'font-weight' : 'bold'
			});
			
			message.css({
				'color' : 'red',
				'text-align' : 'center',
				'font-size' : '14px'
			});
			
		}
		
		return target;
		
	};
})(jQuery);