var diaryApp = angular.module("diaryApp", ["ngRoute", "firebase"]).constant('FIREBASE_URL', 'https://fiveyeardiary.firebaseio.com/');

diaryApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		//.when('/', {controller: "MultiDayListController", templateUrl: "app/partials/multi_day_view.html"})
		.when('/home', {controller: "SingleDayListController", templateUrl: "app/partials/single_day_list_view.html"})
		.when('/', {controller: "RegistrationController", templateUrl: "app/partials/login.html"})
		.when('/register', {controller: "RegistrationController", templateUrl: "app/partials/register.html"})
		.when('/:week_day', {controller: "SingleViewListController", templateUrl: "app/partials/single_read_only_list_view.html"})
		.when('/404', {templateUrl: "app/partials/404.html"})
		.otherwise( {redirectTo: "/404"} );

	//$locationProvider.html5Mode(true);
});
