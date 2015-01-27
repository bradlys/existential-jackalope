angular.module('danceFilters', []).filter('reoccurringDateFormatter', function() {
  return function(input) {
    if(input == false){
    	return "false";
    } else {
    	return "every ... " + input;
    }
  };
});