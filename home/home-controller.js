angular.module('pvtApp').controller('HomeCtrl', function ($scope) {

});

// id of subject
var url = window.location.pathname;
//var id = url.substring(url.lastIndexOf('?id=') + 4, url.lastIndexOf('#/'));

var id = url.substring(url.lastIndexOf('/') + 1);

document.getElementById("id-pvt").innerHTML = id;
