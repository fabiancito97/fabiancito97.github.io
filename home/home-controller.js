angular.module('pvtApp').controller('HomeCtrl', function ($scope, $location) {
	$scope.buildLink = function(){
	  
	  var url = $location.absUrl();
	  var id = url.substring(url.lastIndexOf('?id=') + 4, url.lastIndexOf('#/'));	
      
	  return id 
      
    }

});

// id of subject

//

//var id = url.substring(url.lastIndexOf('/') + 1);




