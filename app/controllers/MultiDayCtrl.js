function MultiDayListController( $scope ){
	$scope.daylist = [
		{ day: 'Monday'},
		{ day: 'Tuesday'},
		{ day: 'Wednesday'},
		{ day: 'Thursday'},
		{ day: 'Friday'},
		{ day: 'Saturday'},
		{ day: 'Sunday'}
	];

};

diaryApp.controller("MultiDayListController", MultiDayListController);