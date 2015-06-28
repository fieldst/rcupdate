// routing templates

var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers',
	'angular-loading-bar',
	'ngAnimate',



	

]);

myApp.factory('pagination', function() {
    var _items = [];
    var _paginatedItems = [];
    var _itemsPerPage = 50;
    var _pageCount = 0;
    
    var paginationService = {};
    
    paginationService.init = function(itemList, itemsPerPage){
        _items = [];
        
        paginationService.addItems(itemList);
        paginationService.setItemsPerPage(itemsPerPage);
    };
    
    paginationService.setItemsPerPage = function(itemsPerPage) {
        _itemsPerPage = itemsPerPage;
        _pageCount = Math.ceil(_items.length / _itemsPerPage);
        paginationService.setPage(0);
    };

    paginationService.addItems = function(itemList) {
        for (var i=0; i<itemList.length; i++){
            _items.push(itemList[i]);
        }
    };
    
    paginationService.setPageToFirst = function(){
        paginationService.setPage(0);
    };
    
    paginationService.setPageToLast = function(){
        paginationService.setPage(_pageCount-1);
    };
    
    paginationService.setPage = function(pageNumber) {                
        var subList = [];
        
        var startIndex = pageNumber * _itemsPerPage;
        var endIndex = (pageNumber + 1) * _itemsPerPage;
        
        if (endIndex > _items.length){
            endIndex = _items.length;
        }
        
        for (var i=startIndex; i<endIndex; i++){
            subList.push(_items[i]);
        }
        
        _paginatedItems = subList;
    };
    
    paginationService.getItems = function() {                
        return _paginatedItems;
    };
    
    paginationService.getPageCount = function(){
        return _pageCount;
    };
    
    paginationService.getPages = function(){
        var pages = [];
        
        for (var i=0; i < _pageCount; i++){
            pages.push({
                index: i,
                pageNumber: i+1
            });
        }
        
        return pages;
    };

    return paginationService;
});


myApp.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	
	when('/rcplanes', {
		templateUrl: 'partials/rcplanes.html',
		controller: 'ListController'
	}).
	when('/rcplanesfpv', {
		templateUrl: 'partials/rcplanesfpv.html',
		controller: 'FPVController'
	}).
	when('/rcplanes2',{
		templateUrl: 'partials/rcplanes2.html',
		controller: 'ListController_two'
	}).
	when('/rcplanes3',{
		templateUrl: 'partials/rcplanes3.html',
		controller: 'ListController_two'
	}).
	when('/rcplanes4',{
		templateUrl: 'partials/rcplanes4.html',
		controller: 'ListController_two'
	}).
	when('/rcplanes5',{
		templateUrl: 'partials/rcplanes5.html',
		controller: 'ListController_two'
	}).
	when('/rcplanes6',{
		templateUrl: 'partials/rcplanes6.html',
		controller: 'ListController_two'
	}).
	when('/rcplanes7',{
		templateUrl: 'partials/rcplanes7.html',
		controller: 'ListController_two'
	}).
	when('/tutorials',{
		templateUrl: 'partials/tutorials.html',
		controller: 'tutorialController'
	}).
	when('/tutorials2',{
		templateUrl: 'partials/tutorials2.html',
		controller: 'tutorialController'
	}).
	when('/tutorials3',{
		templateUrl: 'partials/tutorials3.html',
		controller: 'tutorialController'
	}).
	when('/quadcopters',{
		templateUrl: 'partials/quadcopters.html',
		controller: 'quadController'
		}).
	when('/quadcopters2',{
		templateUrl: 'partials/quadcopters2.html',
		controller: 'quadController'
	}).
	when('/quadcopters3',{
		templateUrl: 'partials/quadcopters3.html',
		controller: 'quadController'
	}).
	when('/quadcopters4',{
		templateUrl: 'partials/quadcopters4.html',
		controller: 'quadController'
	}).
	when('/quadcopters5',{
		templateUrl: 'partials/quadcopters5.html',
		controller: 'quadController'
	}).
	when('/quadcopters6',{
		templateUrl: 'partials/quadcopters6.html',
		controller: 'quadController'
	}).
	when('/quadcopters7',{
		templateUrl: 'partials/quadcopters7.html',
		controller: 'quadController'
	}).
	when('/quadcopters8',{
		templateUrl: 'partials/quadcopters8.html',
		controller: 'quadController'
	}).
	when('/helicopters',{
		templateUrl: 'partials/helicopters.html',
		controller: 'heloController'
	}).
	when('/helicopters2',{
		templateUrl: 'partials/helicopters2.html',
		controller: 'heloController'
	}).
	when('/reviews',{
		templateUrl: 'partials/reviews.html',
		controller: 'reviewController'
	}).
	when('/reviews2',{
		templateUrl: 'partials/reviews2.html',
		controller: 'reviewController'
	}).
	when('/reviews3',{
		templateUrl: 'partials/reviews3.html',
		controller: 'reviewController'
	}).
	when('/videoDetails/:videoId',{
		templateUrl: 'partials/videoDetails.html',
		controller: 'videoController'
	}).
    when('/customrcsearch/:q',{
        templateUrl: 'partials/customrcsearch.html',
        controller: 'SearchController'
    }).
    when('/buildarc',{
        templateUrl: 'partials/buildarc.html',
        controller: 'buildController'
    }).
    when('/customrcsearch',{
        templateUrl: 'partials/customrcsearch.html',
        controller: 'SearchController'
    }).
	otherwise({
	  redirectTo: '/rcplanes'
	});
}]);






