'use strict';
/*global $:false */
/*jshint unused:false*/
/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */

// Inject WOW.js into controller
var WOW;
// MAIN CONTROLLER
var myApp = angular.module('myApp')
 	.controller('MainCtrl', function ($scope) {
		
		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-home',
			image: 'header_V1.svg',
			imageXS: 'header_V2.svg',
			title: 'Lovegrove Design',
			tagline: 'Creative Digital and Print',
			description: 'Professional, print and digital media design.'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 200
		});
		wow.init();

		//console.log('MainCtrl');


		// PARALAX SCROLL EFFECT - BANNER
		// Paralax scroll the title over the background image on main banner
		function parallax() {

			var bannerTitleLarge = document.querySelector('.banner-image');
			bannerTitleLarge.style.marginTop = -(window.pageYOffset / 2)+'px';

			var bannerTitleSmall = document.querySelector('.banner-image-small');
			bannerTitleSmall.style.marginTop = -(window.pageYOffset / 2)+'px';

		}

		window.addEventListener('scroll', parallax, false);

	});



// WEBSITE CONTROLLER
angular.module('myApp')
	.controller('WebCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-websites',
			// image: 'header_V1.svg',
			// imageXS: 'header_V2.svg',
			title: 'Website Design',
			tagline: 'Creative Digital and Print',
			description: 'Professional, modern web design with full responsive behaviour for all of todays modern devices.'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 50
		});
		wow.init();

		//console.log('WebCtrl');

	});


// MOBILE WEBSITE
angular.module('myApp')
	.controller('MobCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-mobile',
			title: 'The Mobile Web',
			tagline: 'Creative Digital and Print',
			description: 'How do your website visitors rate you in the popular mobile world?'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 50
		});
		wow.init();

		//console.log('MobCtrl');

	});


// GRAPHICS CONTROLLER
angular.module('myApp')
	.controller('GraphicCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-graphics',
			title: 'Graphic Design',
			tagline: 'Creative Digital and Print',
			description: 'Contemporary, professional graphic design - showcasing your business in the best possible light.'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 200
		});
		wow.init();

		//console.log('GraphicCtrl');

	});


// LOGOS CONTROLLER
angular.module('myApp')
	.controller('LogoCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-logos',
			title: 'Logo Design',
			tagline: 'Creative Digital and Print',
			description: 'Unique, eye-catching logo design to immediately identify your business, products and services.'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 200
		});
		wow.init();

		//console.log('LogoCtrl');

	});


// ABOUT CONTROLLER
angular.module('myApp')
	.controller('AboutCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-about',
			title: 'Gavin Lovegrove',
			tagline: 'Creative Digital & Print',
			description: 'My background - from javelin thrower to designer ...'
		};

		// Inject WOW.js
		var wow = new WOW({
			animateClass: 'animated',
			offset: 200
		});
		wow.init();

		//console.log('AboutCtrl');

	});


// CONTACT CONTROLLER
angular.module('myApp')
	.controller('ContactCtrl', function ($scope) {

		$scope.loading = true;

		//Dynamic banner content
		$scope.banner = {
			divClass: 'banner-contact',
			title: 'Working With Us',
			tagline: 'Creative Digital and Print',
			description: 'We welcome your enquiry and are happy to discuss your next web or graphic design project.'
		};

		//console.log('LogoCtrl');
		
	});


angular.module('myApp')
	.controller('menuCtrl', ['$scope', '$location', function ($scope, $location) {

	$scope.menuItems = [
		{'name' : 'WEBSITES', 'url' : '/websites'},
		{'name' : 'MOBILE WEB', 'url' : '/mobile'},
		{'name' : 'GRAPHICS', 'url' : '/graphics'},
		{'name' : 'LOGOS', 'url' : '/logos'},
		{'name' : 'ABOUT', 'url' : '/about'},
		{'name' : 'CONTACT', 'url' : '/contact'}
	];

	$scope.isActive = function(menuItem) {
	if (menuItem.url === $location.path()) {
		return true;
	}
		return false;
	};

}]);

/**********************************************************/
//DIRECTIVES
/**********************************************************/

//Scroll to Top
myApp.directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: '@'                                                                   
        },                                                                                   
        link: function(scope, $elm) {                                                   

            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, 'slow');
            });                                                                              
        }                                                                                    
    };
});

// Scroll To directive - scrolls to a position on page
// myApp.directive('scrollToItem', function() {                                                      
// 	return {
// 		restrict: 'A',
// 		scope: {
// 			scrollTo: '@'
// 		},
// 		link: function(scope, $elm) {
// 			$elm.on('click', function() {
// 				$('html,body').animate({scrollTop: $(scope.scrollTo).offset().top - $(window).scrollTop() }, 'slow');
// 			});
// 		}
// 	};
// });


//Fade in Page
myApp.directive('fadePage', function() {
	return {
		compile: function(elm) {
			//console.log('compiling');
			$(elm).css('opacity', 0.65);
			return function(scope, elm) {
				//console.log('animating');
				$(elm).animate({ opacity : 1.0 }, 1500 );
			};
		}
	};
});


// Show spinners before image loads
myApp.directive('spinnerOnLoad', function() {
	return {
		restrict: 'A',
		link: function(scope,element){
			element.on('load', function() {
				element.removeClass('spinner-hide');
				element.addClass('spinner-show');
				element.parent().find('span').remove();
			});
			scope.$watch('ngSrc', function() {
				element.addClass('spinner-hide');
				element.parent().append('<span class="spinner"></span>');
			});      
		}
	};
});

