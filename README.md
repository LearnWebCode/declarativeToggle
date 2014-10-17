declarativeToggle
=================

declrativeToggle makes it simple to create toggle buttons at different breakpointss (think mobile menu buttons). Listen for click events on any element by assigning a "data-toggle-target" attrirubte.  You can enter any CSS-esque selector (for example .main-content or #box3).

declarativeToggle relies on CSS for hiding and displaying content; the script simply adds and removes classes at the right moment to the right element.

This is the boilerplate CSS you can copy and paste into your stylesheet:

```css
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
```

Toggling the Button Text
------------------------
Add a "data-toggle-text" attribute to the button element to allow the button text to switch during show/hide states.

Responsive
----------	
Make things responsive by wrapping the final three rules in a media query.

HTML Example
------------

```html
<span class="toggle-btn" data-toggle-target="#box3" data-toggle-text="Hide box 3">Show box 3</span>

<div id="box3"><p>This content is hidden by default because it is the target of a toggle button. Clicking on the above span will reveal this content.</div>
```