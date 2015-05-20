var diaryApp = angular.module("diaryApp", ["ngRoute", "firebase"]).constant('FIREBASE_URL', 'https://fiveyeardiary.firebaseio.com/');

diaryApp.config(function($routeProvider){
	$routeProvider
		//.when('/', {controller: "MultiDayListController", templateUrl: "app/partials/multi_day_view.html"})
		.when('/', {controller: "SingleDayListController", templateUrl: "app/partials/single_day_list_view.html"})
		.when('/:week_day', {controller: "SingleViewListController", templateUrl: "app/partials/single_read_only_list_view.html"})
		.when('/404', {templateUrl: "app/partials/404.html"})
		.otherwise( {redirectTo: "/404"} );
});
