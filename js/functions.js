;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.nav a').on('click', function(e) {
		    var target = $(this).attr('href'),
		    	sectionOffsetTop;

	    	sectionOffsetTop = $(target).offset().top;

			$('html, body').animate({
				scrollTop: sectionOffsetTop
			}, 1000);

		   e.preventDefault()
		});

		$('.btn-transparent').on('click', function(e) {
		    var target = $(this).attr('href'),
		    	sectionOffsetTop;

	    	sectionOffsetTop = $(target).offset().top;

			$('html, body').animate({
				scrollTop: sectionOffsetTop
			}, 1000);

		   e.preventDefault()
		});
	});

})(jQuery, window, document);
