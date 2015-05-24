diaryApp.factory('Authentication', function($firebase, $firebaseAuth, $routeParams, $location, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)
	var loggedInUser

	var myObject = {
		login : function(user){
			loggedInUser = user
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
			}).then(function(authData){
				var ref = new Firebase(FIREBASE_URL)
				//update users group
				//create a new entry with the unique uid created by createUser
				var postRef = ref.child('users').child(authData.uid)
				postRef.set({
					date: Firebase.ServerValue.TIMESTAMP,
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email,
					password: user.password
				})
			})
		},
		logout : function(){
			loggedInUser = ''
			return auth.$unauth()
		},
		isLoggedIn : function(){
			return (loggedInUser) ? loggedInUser : false
		}
	}

	return myObject
})