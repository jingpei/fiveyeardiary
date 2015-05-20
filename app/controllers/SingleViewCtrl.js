diaryApp.controller("SingleViewListController", function( $scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject ){

	//$scope.week_day = $routeParams.week_day;
	
	// Get today's day and take user automatically to the days entries
	var d = new Date()
	var day = d.getDay()
	$scope.dayConversion = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	
	$scope.week_day = $routeParams.week_day

	// Setup Firebase References
	var ref = new Firebase(FIREBASE_URL);
	var entriesRef = ref.child('entries');
	var questionsRef = ref.child('questions');
	
	// Get question corresponding with todays day from firebase
	var questions = $firebaseArray(questionsRef)

	questions.$loaded().then(function(){
		angular.forEach(questions, function(question){
			if(question.$id == $scope.week_day){
				$scope.questions = question.$value
			}
		})
	})
	

	// Get entries corresponding with todays day from firebase
	$scope.answers = $firebaseArray(entriesRef.child($scope.week_day))


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
