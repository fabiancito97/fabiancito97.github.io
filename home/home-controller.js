angular.module('pvtApp').controller('HomeCtrl', function ($scope) {
	var url = window.location.href;
    document.getElementById("id-pvt").innerHTML = url;

});

// id of subject

//var id = url.substring(url.lastIndexOf('?id=') + 4, url.lastIndexOf('#/'));

//var id = url.substring(url.lastIndexOf('/') + 1);




