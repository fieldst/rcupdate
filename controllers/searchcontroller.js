(function() {
  'use strict';
  
  // angular.module('myApp', [])
  artistControllers.controller('searchController', ['$scope', '$filter', '$window', 'gapiService', function($scope, $filter, $window, gapiService) {

    angular.extend($scope, {
      currentPage: 0,
      resultsQuantity: 50,
      itemsPerPage: 5,
      videos: false,
      sortByName: false,
      q: 'rc planes',
      
      search: function(q, sort) {
        var api_key = 'AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ';
        var request = gapi.client.youtube.search.list({
          key: api_key,
          q: q || $scope.q,
          part: 'snippet',
          maxResults: $scope.resultsQuantity
        });
        
        request.execute(function(response) {
          $scope.videos = response.items;
          if (sort) $scope.sortByProperty('snippet.title');
          $scope.$apply();
        });
      },
      pagesNumber: function() {
        return $scope.resultsQuantity / $scope.itemsPerPage;
      },
      setCurrentPage: function(pageNumber) {
        $scope.currentPage = pageNumber;
      },
      sortByProperty: function(property) {
        $scope.videos = $filter('orderBy')($scope.videos, property);
      }
      
    })
    
    var doStuff = function() {
      $scope.videos = true;
      $scope.search();
    }
    
    $window.initGapi = function() {
      gapiService.initGapi(doStuff);
    }
    
  }])
  .service('gapiService', function() {
    this.initGapi = function(doStuff) {
      gapi.client.load('youtube', 'v3', doStuff)
    }
  })
  .filter('startFrom', function() {
    return function(arr, start) {
      arr = arr || [];
      start = +start;
      return arr.slice(start);
    }
  })
  
})()