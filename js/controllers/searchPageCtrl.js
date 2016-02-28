Food.controller('searchPageCtrl', ['$scope','$location',  function($scope,$location) {
$scope.initialText='hello world, search page';
$scope.goToDetailsPage=function(){
	$location.path('/detailsPage');
}



}])