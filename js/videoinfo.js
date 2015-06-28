var ycontroller = angular.module('ycontroller',[]);

ycontroller.controller('secondController',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		$scope.youtube = data;
	});
}]);