(function() {
	'use strict';

	angular
		.module('myApp', ['ngRoute'])
		.config(myRoutes)
		.controller('ctrlMain', ctrlMain)
		.directive('slides', slides);

	function slides() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				list: '='
			},
			template: '<ul class="bxslider">' +
				'<li ng-repeat="slide in list">' +
				'<img ng-src="{{slide.src}}" alt="" />' +
				'</li>' +
				'</ul>',
			link: function(scope, elm, attrs) {
				setTimeout(function() {
					$(elm).bxSlider({
						adaptiveHeight: true,
						mode: 'fade'
					});
					scope.$apply();
				},1);
			}
		};
	}

	function myRoutes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/js/main/viewMain.html',
				controller: ctrlMain
			})
			.when('/about', {
				templateUrl: 'js/about/viewAbout.html',
				controller: ctrlAbout
			})
			.otherwise({
				redirectTo: '/'
			});
	}

	function ctrlMain($scope) {
		$scope.page = 'Main';
		console.log($scope.page);
	  $scope.base = 'http://bxslider.com';
	  $scope.images = [
	       {src: $scope.base + '/images/730_200/hill_fence.jpg' },
	       {src: $scope.base + '/images/730_200/tree_root.jpg' },
	       {src: $scope.base + '/images/730_200/me_trees.jpg' }
	     ];

	}

	function ctrlAbout($scope) {
		$scope.page = 'About';
		console.log($scope.page);
	}

})();