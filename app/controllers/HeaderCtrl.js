diaryApp.controller('HeaderController', function($scope, Authentication){
	$scope.visible = false;
	$scope.menuItems = [
		{ item: 'Monday', link: '#/Monday' },
		{ item: 'Tuesday', link: '#/Tuesday' },
		{ item: 'Wednesday', link: '#/Wednesday' },
		{ item: 'Thursday', link: '#/Thursday' },
		{ item: 'Friday', link: '#/Friday' },
		{ item: 'Saturday', link: '#/Saturday' },
		{ item: 'Sunday', link: '#/Sunday' },
		{ item: 'Login', link: '#/' },
		{ item: 'Register', link: '#/register' },
		{ item: 'Logout', link: '#/logout' }
	];

	$scope.toggle = function(){
		if( $scope.visible == false ){
			$scope.visible = true
		}
		else{
			$scope.visible = false
		}
	}
})