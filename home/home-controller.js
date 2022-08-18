angular.module('pvtApp').controller('HomeCtrl', function ($scope, $location) {
	$scope.buildLink = function(){
      return $location.absUrl();
      
    }

});

// id of subject

//var id = url.substring(url.lastIndexOf('?id=') + 4, url.lastIndexOf('#/'));

//var id = url.substring(url.lastIndexOf('/') + 1);




