diaryApp.controller('ProfileController', function($scope, $firebaseAuth, $firebaseObject, FIREBASE_URL, Authentication ){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)
	var postRef = ref.child('users').child(Authentication.getUserToken())
	$scope.user_change = $firebaseObject(postRef)
	$scope.success_message = ''

	console.log($scope.user_change)

	$scope.changeAccount = function( changes ){
		postRef.update({ firstname: changes.firstname, lastname: changes.lastname })
		$scope.success_message = "Successfully changed account info"
		console.log($scope.success_message)
	}

	$scope.changeEmail = function( changes ){
		Authentication.changeEmail(changes)
		.then(function(){
			$scope.success_message = "Successfully changed email address"
			$scope.user_change.oldEmail = changes.newEmail
			$scope.user_change.newEmail = ''
			console.log($scope.success_message)
		})
		.catch(function(err){
			$scope.success_message = err.message
			console.log(err.message)
		})
	}

	$scope.changePassword = function( changes ){
		Authentication.changePassword(changes)
		.then(function(){
			$scope.success_message = "Successfully changed password"
			$scope.user_change = {}
			console.log($scope.success_message)
		})
		.catch(function(err){
			$scope.success_message = err.message
			console.log(err.message)
		})
	}
})