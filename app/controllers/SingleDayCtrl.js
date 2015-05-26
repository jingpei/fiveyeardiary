diaryApp.controller("SingleDayListController", function( $scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject, Authentication ){

	//$scope.week_day = $routeParams.week_day;
	
	// Get today's day and take user automatically to the days entries
	var d = new Date()
	var day = d.getDay()
	$scope.dayConversion = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	
	if($routeParams.week_day !== undefined){
		$scope.week_day = $routeParams.week_day
	}
	else{
		$scope.week_day = $scope.dayConversion[day]
	}

	// Setup Firebase References
	var ref = new Firebase(FIREBASE_URL);
	var userRef = ref.child('users');
	var entriesRef = ref.child('entries');
	var questionsRef = ref.child('questions');
	
	//Setup user data
	$scope.user = $firebaseObject(userRef.child(Authentication.getUserToken()))

	// Get question corresponding with todays day from firebase
	var questions = $firebaseArray(questionsRef)

	questions.$loaded().then(function(){
		angular.forEach(questions, function(question){
			if(question.$id == $scope.week_day){
				$scope.questions = question.$value
			}
		})
	})
	
	var testImport = {"simplelogin:1" : {
  "Friday" : {
    "0" : {
      "date" : "2015/04/17",
      "entry" : "$.78 I found in the vending machine change slot."
    },
    "-JpKAFQ2LBn5cF8cxcZ0" : {
      "date" : "2015/04/24",
      "entry" : "A Penny Saved is a Penny Earned"
    },
    "-Jpstn8SkxGfiSjbrWaV" : {
      "date" : "2015/05/01",
      "entry" : "I guess money can't buy happiness if you shop in the wrong places."
    }
  },
  "Monday" : {
    "-Jpsi57ulCiK5c-p-fW0" : {
      "date" : "2015/04/20",
      "entry" : "I have learned that to be with those I like is enough"
    },
    "-Jpsj6Ol0WNYmLgZGoRj" : {
      "date" : "2015/04/27",
      "entry" : "But I can hardly sit still. I keep fidgeting, crossing one leg and then the other. I feel like I could throw off sparks, or break a window--maybe rearrange all the furniture."
    },
    "-JpsjTjFvHtW7KUfO8ZP" : {
      "date" : "2015/05/04",
      "entry" : "Don't you long for something different to happen, something so exciting and new it carries you along with it like a great tide, something that lets your life blaze and burn so the whole world can see it?"
    },
    "-JpsjjJPDviiGsBCDcz6" : {
      "date" : "2015/05/11",
      "entry" : "Many people lose the small joys in the hope for the big happiness."
    },
    "-Jpskcw2oQWm-hV9F5o1" : {
      "date" : "2015/05/18",
      "entry" : "For just one second, look at your life and see how perfect it is. Stop looking for the next secret door that is going to lead you to your real life. Stop waiting. This is it: there's nothing else. It's here, and you'd better decide to enjoy it or you're going to be miserable wherever you go, for the rest of your life, forever."
    }
  },
  "Saturday" : [ {
    "date" : "2015/04/04",
    "entry" : "I actually did the laundry today."
  } ],
  "Sunday" : {
    "0" : {
      "date" : "2015/04/19",
      "entry" : "I NEED the recipe to that shrimp dish she always made when I was growing up!"
    },
    "-JpsvmXGVcSO1mmDFYCO" : {
      "date" : "2015/04/26",
      "entry" : "Does she still have that stuffed rabbit I had when I was baby?"
    },
    "-JpsxGOiL9PaGjlcumyL" : {
      "date" : "2015/05/03",
      "entry" : "Is it weird that I'm an adult now?"
    }
  },
  "Thursday" : {
    "0" : {
      "date" : "2015/04/02",
      "entry" : "I'm not lazy. I'm just really gifted, only instead of being good at music or math I'm good at sleeping late."
    },
    "-JpK7t2qm-19tRF_oHNe" : {
      "date" : "2015/05/14",
      "entry" : "3am. Sleep, those little slices of death — how I loathe them."
    },
    "-Jps_N60QNnafvMH8SYz" : {
      "date" : "2015/05/21",
      "entry" : "Around 11pm because I caught the flu and needed to recover."
    },
    "-JpsprgspxdlOX4VAqJN" : {
      "date" : "2015/04/09",
      "entry" : "I wonder why I don't go to bed and go to sleep. But then it would be tomorrow, so I decide that no matter how tired, no matter how incoherent I am, I can skip on hour more of sleep and live."
    },
    "-JpsqskQ4-79ZNeb8a1k" : {
      "date" : "2015/04/16",
      "entry" : "Am I sleeping? Have I slept at all? This is insomnia."
    },
    "-JpsrDuS8AIBuPPqdir5" : {
      "date" : "2015/04/23",
      "entry" : "I don't know if you've ever felt like that. That you wanted to sleep for a thousand years. Or just not exist. Or just not be aware that you do exist. Or something like that. I think wanting that is very morbid, but I want it when I get like this. That's why I'm trying not to think. I just want it all to stop spinning."
    },
    "-JpsrcaAi3TzH9m6mNCg" : {
      "date" : "2015/04/30",
      "entry" : "The night is the hardest time to be alive and 4am knows all my secrets."
    },
    "-Jpss0Xuny0eZDBiI1wA" : {
      "date" : "2015/05/07",
      "entry" : "I've always envied people who sleep easily. Their brains must be cleaner, the floorboards of the skull well swept, all the little monsters closed up in a steamer trunk at the foot of the bed."
    }
  },
  "Tuesday" : {
    "0" : {
      "date" : "2015/04/14",
      "entry" : "Absolutely not. Housework can kill you if done right."
    },
    "-JpslSqdBpn6Cz3JExt7" : {
      "date" : "2015/04/21",
      "entry" : "And this mess is so big and so deep and so tall, we cannot pick it up. There is no way at all!"
    },
    "-JpsmHxMn-2vQBMtAhpS" : {
      "date" : "2015/04/28",
      "entry" : "That's it, I'm buying a roomba..."
    }
  },
  "Wednesday" : {
    "0" : {
      "date" : "2015/04/08",
      "entry" : "They always say time changes things, but you actually have to change them yourself."
    },
    "1" : {
      "date" : "2015/04/15",
      "entry" : "Why spend 2/7th of your life wasting your free time? After all, free time isn’t free. Free time is the most expensive time you have, because nobody pays for it but you. But that also makes it the most valuable time you have, as you alone stand to reap the profits from spending it wisely."
    },
    "2" : {
      "date" : "2015/04/22",
      "entry" : "There's never enough time to do all the nothing you want."
    },
    "-JpK8nt0JZldyxdHKuBJ" : {
      "date" : "2015/05/14",
      "entry" : "Those who make the worst use of their time are the first to complain of its brevity."
    },
    "-JpmQe-Hf6vERkrZERwM" : {
      "date" : "2015/05/20",
      "entry" : "Cook a good meal at home instead of eating out at unhealthy restaurants all the time."
    },
    "-Jpso3gJKSl3NklYKmfx" : {
      "date" : "2015/04/29",
      "entry" : "Time is what we want most, but what we use worst."
    },
    "-Jpso_PWGEPT-QNSLtPm" : {
      "date" : "2015/05/06",
      "entry" : "Five minutes are enough to dream a whole life, that is how relative time is."
    }
  }
}
}


	// Get entries corresponding with todays day from firebase
	// $scope.answers = $firebaseArray(entriesRef.child($scope.week_day)) - single user
	$scope.answers = $firebaseArray(entriesRef.child(Authentication.getUserToken()).child($scope.week_day))

	//entriesRef.set( testImport )

	// var answers = {	
	// 	"Monday" : [
	// 		{ date: '2014/10/29', entry: 'Monday entry only one'}
	// 	],
	// 	"Tuesday" : [
	// 		{ date: '2014/10/31', entry: 'Tuesday entry only one'}
	// 	],
	// 	"Wednesday" : [
	// 		{ date: '2014/10/30', entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'},
	// 		{ date: '2014/11/07', entry: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'},
	// 		{ date: '2014/11/14', entry: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
	// 	],
	// 	"Thursday" : [
	// 		{ date: '2014/11/01', entry: 'Thursday entry only one'}
	// 	],
	// 	"Friday" : [
	// 		{ date: '2014/11/02', entry: 'Friday entry only one'}
	// 	],
	// 	"Saturday" : [
	// 		{ date: '2014/11/03', entry: 'Saturday entry only one'}
	// 	],
	// 	"Sunday" : [
	// 		{ date: '2014/11/03', entry: 'Saturday entry only one'}
	// 	]		
	// }

	//questionsRef.set(questions);
	//entriesRef.set(answers)

	// $scope.answers = [
	// 	{ date: '2014/10/30', entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'},
	// 	{ date: '2014/11/07', entry: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'},
	// 	{ date: '2014/11/14', entry: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
	// ];

	// if( answers[$scope.week_day] ){
	// 	$scope.answers = answers[$scope.week_day];
	// 	$scope.questions = questions[$scope.week_day];
	// }

	$scope.error_text = "";
	entry_text = {};

	$scope.disableEntry = function(){
		var today = new Date();
		var date = getFormattedDate(today);
		var check_date = $scope.answers
							.map(function( obj ){
								return obj.date;
							})
							.filter(function( obj ){
								return obj === date;
							});
		return check_date.length > 0;
	}

	$scope.addEntry = function( new_entry ){
		var today = new Date();
		var date = getFormattedDate(today);
		var check_date = $scope.answers
							.map(function( obj ){
								return obj.date;
							})
							.filter(function( obj ){
								return obj === date;
							});

		var disableEntry = function(e){
			return check_date.length > 0;
		};

		if ( new_entry == null || !new_entry.entry ){
			$scope.error_text = "No input!";
		}
		else if ( check_date.length > 0){
			$scope.error_text = "Come back for tomorrow's question!";
			$scope.entry_text = {}; 
		}
		else{
			new_entry.date = date;
			//$scope.answers.push( new_entry );
			entriesRef.child($scope.week_day).push( new_entry )
			$scope.entry_text = {};
		}
	}

	function getFormattedDate(date) {
	  var year = date.getFullYear();
	  var month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;
	  var day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;
	  return year + '/' + month + '/' + day;
	}

});
