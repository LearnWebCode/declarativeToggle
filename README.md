declarativeToggle
=================

declrativeToggle makes it simple to create toggle buttons at different breakpointss (think mobile menu buttons). Listen for click events on any element by assigning a "data-toggle-target" attrirubte.  You can enter any CSS-esque selector (for example .main-content or #box3).

declarativeToggle relies on CSS for hiding and displaying content; the script simply adds and removes classes at the right moment to the right element.

This is the boilerplate CSS you can copy and paste into your stylesheet:

	.toggle-btn {
		display: none;
	}

	.toggle-btn-visible {
		display: block;
	}

	.toggle-target-hidden {
		display: none;
	}

	.toggle-target-expanded {
		display: block;
	}
	
Make things responsive by wrapping the final three rules in a media query.