angular.module('danceDirective', [])
  .directive('dance', function(){
    return {
      scope : { dance: '='},
      restrict: 'A',
      templateUrl: 'dance.html'
    };
  });

  