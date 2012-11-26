Documentation
=============

This is a JavaScript library and it comes with the following plugins:

* `libs/jquery.textHighlighter.js`
* `libs/jquery.detectQuirksMode.js`

Usage:
	
	$(function() {
		/**
		 * textHighlighter
		 * Double clicking a text within the ".content" element will highlight all string occurances of that word.
		 */
		$(".content").textHighlighter();
		
		/**
		 * detectQuirksMode
		 * If the browser's in Quirks Mode it will remove all "body" contents and display the Quirks Mode message.
		 */
		$(document).detectQuirksMode();
	});
