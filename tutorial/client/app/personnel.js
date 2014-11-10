angular.module('personnel',[])
.factory("people", [function() {
	var o = {
		people: [
			{title:'person1', Occupation:'Jr dev'},
			{title:'person2', Occupation:'Sr dev'},
			{title:'person3', Occupation:'Delivery Manager'}
		]
	};
	return o;
}])
.controller('MainCtrl', [
	'$scope',
	'people',
	function($scope, people){
		$scope.test = 'personnelCreation';
	
		 $scope.people = people.people;
						
		$scope.addPerson = function(){
			if(!$scope.title || $scope.title === ''){return;}
			$scope.people.push({title: $scope.title, Occupation: 'Trainee'});
			$scope.title = '';
		}
		$scope.promote = function(person){
			if (person.Occupation == "Trainee")
				person.Occupation = "Jr dev";
			else if (person.Occupation == "Jr dev")
				person.Occupation = "Sr dev";
			else if (person.Occupation == "Sr dev")
				person.Occupation = "Delivery Manager"
		}
				$scope.demote = function(person){
			if (person.Occupation == "Jr dev")
				person.Occupation = "Trainee";
			else if (person.Occupation == "Sr dev")
				person.Occupation = "Jr dev";
			else if (person.Occupation == "Delivery Manager")
				person.Occupation = "Sr dev"
		}


}]);