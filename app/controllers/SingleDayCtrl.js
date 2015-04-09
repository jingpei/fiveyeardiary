function SingleDayListController( $scope, $routeParams ){

	$scope.week_day = $routeParams.week_day;

	var answers = {
		"Wednesday" : [
			{ date: '2014/10/30', entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'},
			{ date: '2014/11/07', entry: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'},
			{ date: '2014/11/14', entry: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
		],
		"Tuesday" : [
			{ date: '2014/10/31', entry: 'Tuesday entry only one'}
		],
		"Thursday" : [
			{ date: '2014/11/01', entry: 'Thursday entry only one'}
		]	
	}

	var questions = {
		"Wednesday" : "What was something you were nervous to do?",
		"Tuesday" : "What did you eat today?",
		"Thursday" : "What is one thing that made you happy?"
	}

	// $scope.answers = [
	// 	{ date: '2014/10/30', entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'},
	// 	{ date: '2014/11/07', entry: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'},
	// 	{ date: '2014/11/14', entry: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
	// ];

	if( answers[$scope.week_day] ){
		$scope.answers = answers[$scope.week_day];
		$scope.questions = questions[$scope.week_day];
	}

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
			$scope.answers.push( new_entry );
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

};

diaryApp.controller("SingleDayListController", SingleDayListController);