artistControllers.controller('ListController_two',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		$scope.youtube_two = data;
	});
}]);