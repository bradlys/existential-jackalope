var danceControllers = angular.module('danceControllers', []);

danceControllers.controller('DanceListCtrl', function($scope, dances){
	dances.list(function(dances) {
		$scope.dances = dances;
		var styles = [""];
		for(var dance in dances){
			if(styles.indexOf(dances[dance].style) === -1){
				styles.push(dances[dance].style);
			}
		}
		$scope.styles = styles;
		$scope.styleFilter = "";
	});
});

danceControllers.controller('DanceDetailCtrl', function($scope, $routeParams, dances){
	dances.find($routeParams.danceId, function(dance){
		$scope.dance = dance;
	});
});