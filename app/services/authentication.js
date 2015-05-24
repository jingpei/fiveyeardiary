diaryApp.factory('Authentication', function($firebase, $firebaseAuth, $routeParams, $location, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)

	var myObject = {
		login : function(user){
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			})
		}, 
		register : function(user){
			//returns a promise?
			return auth.$createUser({
				email: user.email,
				password: user.password
			})
		},
		logout : function(){
			return auth.$unauth()
		}
	}

	return myObject
})