diaryApp.controller('RegistrationController', function( $scope, $location, $firebaseAuth, FIREBASE_URL, Authentication ){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)

	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/home')
		}).catch(function(err){
			console.log(err.message)
		})
	}

	$scope.register = function(){
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user)
			$location.path('/home')	
		}).catch(function(err){
			console.log(err.message)
		})
	}

	$scope.logout = function(){
		Authentication.logout().
		then(function(){
			$location.path('/login')
		}).catch(function(err){
			console.log(err.message)
		})
	}
})