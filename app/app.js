var diaryApp = angular.module("diaryApp", ["ngRoute"]);

diaryApp.config(function($routeProvider){
	$routeProvider
		.when('/', {controller: "SingleDayListController", templateUrl: "app/partials/single_day_list_view.html"});
});