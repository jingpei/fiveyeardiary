diaryApp.controller('RegistrationController', function( $scope, $location, $rootScope, $firebaseAuth, $firebaseObject, FIREBASE_URL, Authentication ){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)
	var postRef = ref.child('users')


	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/home')
		}).catch(function(err){
			$scope.message = err.message
			console.log(err.message)
		})
	}

	$scope.register = function(){
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user)
			$location.path('/home')	
		}).catch(function(err){
			$scope.message = err.message
			console.log(err.message)
		})
	}

	$scope.logout = function(){
		Authentication.logout()
		$location.path('/')
	}
})