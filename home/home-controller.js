angular.module('pvtApp').controller('HomeCtrl', function ($scope, $window) {
	$scope.buildLink = function(){
      return $window.location.pathname
    }

});

// id of subject

//var id = url.substring(url.lastIndexOf('?id=') + 4, url.lastIndexOf('#/'));

//var id = url.substring(url.lastIndexOf('/') + 1);




