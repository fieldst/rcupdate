var artistControllers = angular.module('artistControllers',['ngAnimate']);


artistControllers.controller('ListController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';

		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+planes&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}

		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);

		$scope.loadShareThis = function() {
    stButtons.makeButtons();
  }
	};

	// load initial data
	$scope.loadData();
}]);

// Start fpv

artistControllers.controller('FPVController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';

		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+plane+fpv+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=50&q=rc+plane+fpv+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}

		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);

		$scope.loadShareThis = function() {
    stButtons.makeButtons();
  }
	};

	// load initial data
	$scope.loadData();
}]);






// end of RC planes

artistControllers.controller('SearchController',['$scope', '$http', '$routeParams', '$route', function($scope, $http, $routeParams, $route){
	$scope.youtube = {};
	$scope.isLeoading = false;

	$scope.loadData = function(pageToken){
		var url = '';

		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=' + $routeParams.q + '&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=50&q=' + $routeParams.q + '&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}

		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	$scope.search = function(){
		var q = $('#q').val();

		$route.updateParams({
			q: q
		});
	};

	if ($routeParams.q){
		$scope.loadData();
	}
}]);

// end of search controller

// artistControllers.controller('ListController_two',['$scope', '$http', 'pagination', function($scope, $http, pagination){
// 	$scope.youtube_all = [];

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_two){
// 		$scope.youtube_two = data_two;	
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fpv+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_three){
// 		$scope.youtube_three = data_three;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+gliders&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_four){
// 		$scope.youtube_four = data_four;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+dog+fight&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_five){
// 		$scope.youtube_five = data_five;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_six){
// 		$scope.youtube_six = data_six;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+horizon+lobby&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_seven){
// 		$scope.youtube_seven = data_seven;
// 	});
// }]);

// End of RC planes Main

// Start tutorials




artistControllers.controller('tutorialController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';

		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+plane+tutorial+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+tutorials&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}


		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	// load initial data
	$scope.loadData();
}]);








// artistControllers.controller('tutorialController',['$scope', '$http', function($scope, $http){
// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+tutorial+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_tutorial){
// 		$scope.tutorial = data_tutorial;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=how+to+fly+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_tutorial_two){
// 		$scope.tutorial_two = data_tutorial_two;
//     });

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+advanced+tutorial&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(data_tutorial_three){
// 		$scope.tutorial_three = data_tutorial_three;
// 	});
// }]);
// End of tutorials 

// Start Quadcopters


artistControllers.controller('quadController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopters&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ
		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+quadcopters&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+scenic+views&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}


		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	// load initial data
	$scope.loadData();
}]);



// artistControllers.controller('quadController',['$scope', '$http', function($scope, $http){
// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopters&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad){
// 		$scope.quadcopters = quad;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+fpv&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_two){
// 		$scope.quadcopters_two = quad_two;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+quadcopter+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_three){
// 		$scope.quadcopters_three = quad_three;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+fpv&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_four){
// 		$scope.quadcopters_four = quad_four;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+jrc+model+cx20&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_five){
// 		$scope.quadcopters_five = quad_five;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+dji+phantom&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_six){
// 		$scope.quadcopters_six = quad_six;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+blade+350+qx3&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_seven){
// 		$scope.quadcopters_seven = quad_seven;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+long+distance&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(quad_eight){
// 		$scope.quadcopters_eight = quad_eight;
// 	});
// }]);
// End Quadcopters

// Start Helicopters

artistControllers.controller('heloController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ
		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+helicopter&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopters&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}


		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	// load initial data
	$scope.loadData();
}]);


// artistControllers.controller('heloController',['$scope', '$http', function($scope, $http){
// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(helodata){
// 		$scope.helos = helodata;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(helodata_two){
// 		$scope.helos_two = helodata_two;
// 	});
// }]);
// End Helicopters

// Start Reviews

artistControllers.controller('reviewController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+review%2C+rc+quadcopter+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ
		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=rc+plane+review%2C+rc+quadcopter+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}


		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	// load initial data
	$scope.loadData();
}]);



artistControllers.controller('buildController',['$scope', '$http', function($scope, $http){
	$scope.youtube = {};
	$scope.isLoading = false;

	$scope.loadData = function(pageToken){
		var url = '';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+review%2C+rc+quadcopter+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ
		if (pageToken){
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=' + pageToken + '&order=date&maxResults=50&q=how+to+build+a+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		} else {
			url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=how+to+build+a+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
		}


		$scope.isLoading = true;

		$http.get(url).success(function(data){
			if ($scope.youtube.items){
				for(var i=0; i<data.items.length; i++){
					$scope.youtube.items.push(data.items[i]);
				}
			} else {
				$scope.youtube = data;
			}

			$scope.prevPageToken = data.prevPageToken || '';
			$scope.nextPageToken = data.nextPageToken || '';

			$scope.isLoading = false;
		});
	};

	$scope.loadMore = function(){
		$scope.loadData($scope.nextPageToken);
	};

	// load initial data
	$scope.loadData();
}]);

// artistControllers.controller('reviewController',['$scope', '$http', function($scope, $http){
// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+review%2C+rc+quadcopter+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(reviewdata){
// 		$scope.review = reviewdata;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(reviewdata_two){
// 		$scope.review_two = reviewdata_two;
// 	});

// 	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=beginner+rc+plane+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
// 	.success(function(reviewdata_three){
// 		$scope.review_three = reviewdata_three;
// 	});
// }]);


// End Reviews
// End Grab photos

//Start Grab Video

artistControllers.controller('videoController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
	.success(function(data){
		$scope.video = data.items[0];
		$scope.videoId = $routeParams.videoId;
	});

	$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
	.success(function(data){
		$scope.video_two = data.items[0];
		$scope.videoId_two = $routeParams.videoId;  
	});
}]);
