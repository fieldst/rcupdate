var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController',['$scope', '$http', function($scope, $http){
	console.log('hi');

	$scope.loadMore = function(){
		alert('bob');
	};

	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		$scope.youtube = data;
	});
}]);


artistControllers.controller('videoController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
	.success(function(data){
		$scope.video = data.items[0];
		$scope.videoId = $routeParams.videoId;
	});  
}]);