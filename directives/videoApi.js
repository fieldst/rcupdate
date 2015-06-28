myApp.directive('myYoutube', function($sce){
  return {
    /*
       We should bind to elements and not elements and attributes
       like you had it. This is because a youtube embed is a distinct
       object, we don't want ti "youtubify" any random element.
    */
    /*restrict: 'EA',*/ /*before*/
    restrict: 'E',      /*after*/
    scope: { 
      /*
         We want to pass the video id to this scope and have it bind
         off the value that the parent passed in. We use a better name
         here and use the '@' to signify that we want to bind the value
         of the variable passed by the parent.
      */
      /*code: '='*/ /*before*/
      videoId: '@'  /*after*/
    },
    /*
       Use templates, try to not embed HTML, it is impossible to debug.
    */
    /*template: '.....'*/  /*before*/
    templateUrl: 'directives/videoApi.html',/*after*/
    link: function ($scope) {
      /*
         Here we keep an eye on that videoId scope variable. When it gets
         set, we parse and sanitize it with the $sce function and then set
         a scope variable called "url" to the youtube link. That url variable
         is used in the videoApi.html template.
      */
      $scope.$watch('videoId', function(newValue, oldValue){
        if (newValue){
          $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newValue +"?rel=0&modestbranding=1&autoplay=1&theme=light");
        }
      });
    }
  };
});




myApp.directive('siteHeader', function () {
    return {
        restrict: 'E',
        template: '<button class="btn">{{back}}</button>',
        scope: {
            back: '@back',
            forward: '@forward',
            icons: '@icons'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
            $(element[1]).on('click', function() {
                history.forward();
                scope.$apply();
            });
        }
    };
});

function Ctrl($scope) {
}



