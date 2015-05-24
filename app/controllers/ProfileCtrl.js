diaryApp.controller('ProfileController', function($scope, $firebaseAuth, $firebaseObject, FIREBASE_URL, Authentication ){
	var ref = new Firebase(FIREBASE_URL)
	var postRef = ref.child('users')
	$scope.user = $firebaseObject(postRef.child(Authentication.getUserToken()))
})