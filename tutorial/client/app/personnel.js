angular.module('personnel',['ui.router'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
		.state('employeeDetails', {
			url:'/employeeDetails/{id}',
			templateUrl:'/employeeDetails.html',
			controller : 'EmployeeDetailsCtrl'
		});

		$urlRouterProvider.otherwise('home');
}])

.factory("people", [function() {
	var personnel = {
		people: [
			{title:'person1', Occupation:'Jr dev'},
			{title:'person2', Occupation:'Sr dev'},
			{title:'person3', Occupation:'Delivery Manager'}
		]
	};
	return personnel;
}])

.factory("positions", [function() {
	var o = {
		positions: [
		'Trainee',
		'Jr dev',
		'Sr dev',
		'Delivery Manager'
		]
	};
	return o;
}])

.controller('MainCtrl', [
	'$scope',
	'people',
	'positions',
	function($scope, people, positions){

		$scope.people = people.people;
		$scope.positions = positions.positions;

		$scope.addPerson = function(){
			if(!$scope.title){return;}
			$scope.people.push(
				{title: $scope.title, 
				Occupation: $scope.positions[0],
				details: [
					{phone: 555-5555},
					{hometown: "Bloomfield Hills, Mi"}
				]
			});
			$scope.title = '';
		}
		$scope.promote = function(person){
			var i = $scope.positions.indexOf(person.Occupation);
			console.log(i);
			if(i<$scope.positions.length-1){
				i++;
			}
			person.Occupation = $scope.positions[i];
		}
		$scope.demote = function(person){
			var i = $scope.positions.indexOf(person.Occupation);
			console.log(i);
			if(i>0){
				i--;
			}
			person.Occupation = $scope.positions[i];
		}
}])
.controller('EmployeeDetailsCtrl',[
	'$scope',
	'$stateParams',
	'people',
	function($scope,$stateParams,people){
		$scope.person = people.people[$stateParams.id];
}]);