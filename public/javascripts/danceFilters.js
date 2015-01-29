var app = angular.module('danceFilters', []);

app.filter('recurringDateFormatter', function() {
  return function(danceDate) {
    if(danceDate === false){
    	return "false";
    } else {
    	var returnString = "";
    	var dateString = danceDate;
    	var days = {"1" : "Sunday", "2" : "Monday", "3" : "Tuesday", "4" : "Wednesday",
    "5" : "Thursday", "6" : "Friday", "7" : "Saturday"};
    	var occurrences = {"E" : "Every", "1" : "1st", "2" : "2nd", "3" : "3rd", 
    	"4" : "4th", "5" : "5th"};
    	while(dateString.length > 1){
			var occurrence = dateString[0];
			var day = dateString[1];
			if(occurrences.hasOwnProperty(occurrence)){
				returnString = returnString + occurrences[occurrence] + " ";
			} else {
				returnString = returnString + "??? ";
			}
			if(days.hasOwnProperty(day)){
				returnString = returnString + days[day];
			} else {
				returnString = returnString + "???";
			}
			if(dateString.length > 2){
				returnString = returnString + ", ";
				dateString = dateString.substring(3);
			} else {
				dateString = "";
			}
    	}
    	return returnString;
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


app.filter('daysFilter', function(){
	return function(dances, day){
		if(day === "All Days"){
			return dances;
		}
		var filtered = [];
		day = day.substring(0,day.length-1);
		var days = {"1" : "Sunday", "2" : "Monday", "3" : "Tuesday", "4" : "Wednesday",
    				"5" : "Thursday", "6" : "Friday", "7" : "Saturday"};
		angular.forEach(dances, function(dance) {
			danceDays = dance.recurring.split(",");
			var index;
			for (index in danceDays){
				var daysIndex = danceDays[index][1];
				if(day === days[daysIndex]){
					filtered.push(dance);
					break;
				}
			}
	    });
    	return filtered;
	}
});