var app = angular.module('dancesFactory', []);
app.factory('dances', function($http){
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

app.factory('styles', function($http){
  return {
    list: function(callback){
      $http({
        method: 'GET',
        url: 'json/styles.json',
        cache: true
      }).success(callback);
    },
    find: function(style, callback){
      $http({
        method: 'GET',
        url: 'json/style_' + style + '.json',
        cache: true
      }).success(callback);
    }
  }
});