(function($) {
	$.decimalmask = {};
	$.fn.extend({
		decimalmask: function(){
			$(this).keydown(
				function(e) {

					if ((e.which >= 37 && e.which <= 40)
						|| (e.which >= 48 && e.which <= 57)
						|| (e.which >= 96 && e.which <= 105)
						|| e.which == 188 || e.which == 190 || e.which == 8 || e.which == 110 || e.which == 46 || e.which == 35 || e.which == 36) {
					} else {
						e.preventDefault();
					}
				});
			$(this).keypress(
				function(e) {

					if ((e.which >= 48 && e.which <= 57)
						|| e.which == 46 || e.which == 44 || e.which == 8 || e.which == 0) {
					} else {
						e.preventDefault();
					}

					//single separator check
					if (($(this).val().indexOf('.') !== -1 ||
						$(this).val().indexOf(',') !== -1)) {
						idx = $(this).val().indexOf('.') !== -1 ?
							$(this).val().indexOf('.') :
							$(this).val().indexOf(',');
						if ((e.which == 44 || e.which == 46)) {
							e.preventDefault();
						}
					}
				});

			$(this).bind('paste', function(e) {
				var self = this;
				setTimeout(function(e) {
					var decRegEx = /^[0-9]+((\.|,)[0-9][0-9]?)?$/;
					if (!decRegEx.test($(self).val())) {
						$(self).val("");
					}
				}, 0);
			});

		}
	});



})(jQuery);

						   
