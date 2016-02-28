Food.controller('homeCtrl', ['$scope','$location', function($scope,$location) {
$scope.initialText='hello world, home page';

$scope.menuOptions=['Home','Add Item'];
$scope.goToSearchPage=function(){
	console.log("blablablabla");
	$location.path('/searchPage');
}

}])