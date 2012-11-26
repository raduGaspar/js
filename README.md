Documentation
=============

This is a JavaScript library and it comes with the following plugins:

* `libs/jquery.textHighlighter.js`
* `libs/jquery.detectQuirksMode.js`

Usage:
	
	//textHighlighter
	$(function() {
		$(".content").textHighlighter();
	});
	
	//detectQuirksMode
	$(function() {
		$(document).detectQuirksMode();
	});

Info:

	//textHighlighter
	Double clicking a text within the ".content" element will highlight all string occurances of that word.

	//detectQuirksMode
	If the browser's in Quirks Mode it will remove all `body` contents and display the Quirks Mode message.
