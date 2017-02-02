angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// $scope.currentUser = user;
   // $scope.friends = friendArr;

	function setProfile(){
		friendService.getFriends()
		.then(function(resp){
			$scope.currentUser = resp.data.currentUser;
			$scope.friends = resp.data.friends;
		});
	}
	setProfile();
});