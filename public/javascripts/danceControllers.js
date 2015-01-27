var danceControllers = angular.module('danceControllers', []);

danceControllers.controller('DanceListCtrl', function($scope, dances){
	dances.list(function(dances) {
		$scope.dances = dances;
		var styles = ["All Dances"];
		var days = ["All Days"];
		for(var dance in dances){
			if(styles.indexOf(dances[dance].style) === -1){
				styles.push(dances[dance].style);
			}
			if(days.indexOf(dances[dance].reoccurringDate) === -1){
				days.push(dances[dance].reoccurringDate);
			}
		}
		$scope.styles = styles;
		$scope.days = days;
		$scope.styleFilter = "All Dances";
		$scope.dayFilter = "All Days";
	});
});

danceControllers.controller('DanceDetailCtrl', function($scope, $routeParams, dances){
	dances.find($routeParams.danceId, function(dance){
		$scope.dance = dance;
	});
});