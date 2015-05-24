diaryApp.controller('RegistrationController', function( $scope, $location, $firebaseAuth, FIREBASE_URL, Authentication ){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)

	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/')
		}).catch(function(err){
			console.log("error " + err.message)
		})
	}

	$scope.register = function(){
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user)
		}).cathc(function(err){
			console.log("registration " + err.message)
		})
	}

	$scope.logout = function(){
		Authentication.logout().
		then(function(){
			$location.path('/login')
		}).catch(function(err){
			console.log("logout " + err.message)
		})
	}
})