angular.module('dancesFactory', [])
  .factory('dances', function($http){
    return {
      list: function(callback){
        $http({
          method: 'GET',
          url: 'json/dances.json',
          cache: true
        }).success(callback);
      },
      find: function(id, callback){
        $http({
          method: 'GET',
          url: 'json/dance_' + id + '.json',
          cache: true
        }).success(callback);
      }
    };
  });