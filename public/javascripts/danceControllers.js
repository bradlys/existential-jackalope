var danceControllers = angular.module('danceControllers', []);

danceControllers.controller('DanceListCtrl', 
['$scope', '$location', 'dances',
function($scope, $location, dances){
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
			dances[dance].stylelink = function(event){
				$location.path('/info/' + this.style);
			};
		}
		$scope.styles = styles;
		$scope.days = days;
		$scope.styleFilter = "All Dances";
		$scope.dayFilter = "All Days";
	});
}]);

danceControllers.controller('DanceDetailCtrl',
['$scope', '$routeParams', 'dances',
function($scope, $routeParams, dances){
	dances.find($routeParams.danceId, function(dance){
		$scope.dance = dance;
	});
}]);

danceControllers.controller('StyleInfoCtrl',
['$scope', '$location', '$routeParams', '$http', 'styles',
function($scope, $location, $routeParams, $http, styles){
	styles.find($routeParams.style, function(style) {
		$scope.style = style;
	});
}]);