angular.module('teachers',[])
.component('app' , {
	templateUrl : `input.html`,
	controller:function($http){
		this.addStudent = function($scope){
			$http({
  			method: 'POST',
  			url: '/addMark',
  			data:JSON.Stringify({
  				stdname: $scope.name,
                stdmark : $scope.mark
  			})
			}).then(function successCallback(response) {
				console.log(response);
  			})
		}

		this.getStudents = function() {
			$http({
  			method: 'GET',aXCDXCV
  			url: '/allStudent'
			}).then(function successCallback(response) {
				console.log(response);
				$scope.students = response;
  			})
		}
	}
})

