var diaryApp = angular.module("diaryApp", ["ngRoute"]);

diaryApp.config(function($routeProvider){
	$routeProvider
		.when('/', {controller: "MultiDayListController", templateUrl: "app/partials/multi_day_view.html"})
		.when('/:week_day', {controller: "SingleDayListController", templateUrl: "app/partials/single_day_list_view.html"})
		.when('/404', {templateUrl: "app/partials/404.html"})
		.otherwise( {redirectTo: "/404"} );
});