'use strict';
/*//global $:false */
/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */

angular.module('myApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/websites', {
			templateUrl: 'views/websites.html',
			controller: 'WebCtrl'
		})
		.when('/mobile', {
			templateUrl: 'views/mobile.html',
			controller: 'MobCtrl'
		})
		.when('/graphics', {
			templateUrl: 'views/graphics.html',
			controller: 'GraphicCtrl'
		})
		.when('/logos', {
			templateUrl: 'views/logos.html',
			controller: 'LogoCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.otherwise({
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		});
		

})
.run(function($rootScope, $location, $anchorScroll, $routeParams) {

	$rootScope.$on('$routeChangeSuccess', function() {
		$location.hash($routeParams.scrollTo);
		$anchorScroll();
	});
  
});