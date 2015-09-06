'use strict';
(function(){

	// RESIZE MENU NAVBAR
	// Dynamically resizeS the menu 'nav bar' (smaller) when scroll from top > 200px
	var element = document.querySelector('.navbar-inverse');
	element.classList.add('menu-bar-large');

	function menuBarResize() {
		if(window.pageYOffset > 200) {
			element.classList.add('menu-bar-small');
			element.classList.remove('menu-bar-large');
		} else {
			element.classList.add('menu-bar-large');
			element.classList.remove('menu-bar-small');
		}
	}

	// Add listener event to detect scrolling
	window.addEventListener('scroll', menuBarResize, false);





	// PARALAX SCROLL EFFECT - BANNER
	// Paralax scroll the title over the background image on main banner



	

	

	
}());

