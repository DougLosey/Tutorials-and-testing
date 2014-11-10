angular.module('personnel',[])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'personnelCreation';
	
$scope.people = [
	{title:'person1', Occupation:'Jr dev'},
	{title:'person2', Occupation:'Sr dev'},
	{title:'person3', Occupation:'Delivery Manager'}
	];
	
	}]);
//$scope.addPerson = function(){
//	$scope.posts.push({title: 'A new Employee!', Occupation: 'Trainee'});
//}