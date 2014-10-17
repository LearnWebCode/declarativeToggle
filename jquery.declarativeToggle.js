jQuery(document).ready(function() {
	
	// primary toggle function
	var targetToggle = function(toggleBtn) {
		
		var originalText = jQuery(toggleBtn).text();
		var toggleTarget = jQuery(toggleBtn).attr('data-toggle-target');
		
		jQuery(toggleBtn).addClass("toggle-btn-visible");
		jQuery(toggleTarget).addClass("toggle-target-hidden");
		
		// click event
		jQuery(toggleBtn).click(function() {
			
			// Toggle the button text (for example: Hide instead of Show)
			if ( jQuery(toggleBtn).text() == jQuery(toggleBtn).attr('data-toggle-text') ) {
				jQuery(toggleBtn).text(originalText);
			} else {
				jQuery(toggleBtn).text(jQuery(toggleBtn).attr('data-toggle-text'));
			}
			
			// Slide Toggle and then add class and remove inline style
			jQuery(toggleTarget).slideToggle(400, function() {
				jQuery(toggleTarget).toggleClass("toggle-target-expanded").css('display', '');
			});
		});
		
	}; // end targetToggle function
	
	// If any elements on page use our data attribute then run our code
	if ( jQuery("[data-toggle-target]").length ) {
		jQuery("[data-toggle-target]").each(function() {
			targetToggle(this);
		});
	}

});