var myApp = angular.module('myApp', [
	'ngRoute',
	'ycontroller'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl: 'partials/videoinfo.html',
		controller: 'secondController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);



