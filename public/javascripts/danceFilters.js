var app = angular.module('danceFilters', []);

app.filter('reoccurringDateFormatter', function() {
  return function(input) {
    if(input == false){
    	return "false";
    } else {
    	return "every ... " + input;
    }
  };
});

app.filter('stylesFilter', function(){
	return function(dances, style) {
		if(style === "All Dances"){
			return dances;
		}
		var filtered = [];
		angular.forEach(dances, function(dance) {
	      if(style === dance.style) {
	        filtered.push(dance);
	      }
	    });
    	return filtered;
	}
});

//Holding place, totally incorrect.
//This requires a bit more research
app.filter('daysFilter', function(){
	return function(dances, day){
		if(day === "All Days"){
			return dances;
		}
		var filtered = [];
		angular.forEach(dances, function(dance) {
	      if(day === dance.reoccurringDate) {
	        filtered.push(dance);
	      }
	    });
    	return filtered;
	}
});