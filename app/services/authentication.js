diaryApp.factory('Authentication', function($firebase, $firebaseAuth, $routeParams, $location, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL)
	var auth = $firebaseAuth(ref)
	var loggedInUser
	var uniqueId

	var myObject = {
		login : function(user){
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then(function(authData){
				uniqueId = authData.uid
				loggedInUser = authData.password.email
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
			loggedInUser = undefined
			auth.$unauth()
		},
		isLoggedIn : function(){
			return (loggedInUser) ? loggedInUser : false
		},
		getUserToken : function(){
			return uniqueId
		}, 
		changeEmail : function(user){
			return auth.$changeEmail({
				oldEmail: user.oldEmail,
				newEmail: user.newEmail,
				password: user.oldPassword
			}).then(function(){
				var ref = new Firebase(FIREBASE_URL)
				//update users group
				//create a new entry with the unique uid created by createUser
				var postRef = ref.child('users').child(uniqueId)
				postRef.update({ email: user.newEmail })				
				console.log("Email changed!")
			})
		},
		changePassword : function(user){
			return auth.$changePassword({
				email: user.oldEmail,
				oldPassword: user.oldPassword,
				newPassword: user.newPassword
			}).then(function(){
				var ref = new Firebase(FIREBASE_URL)
				//update users group
				//create a new entry with the unique uid created by createUser
				var postRef = ref.child('users').child(uniqueId)
				postRef.update({ password: user.newPassword })	
				console.log("Password changed!")
			})
		}
	}

	return myObject
})