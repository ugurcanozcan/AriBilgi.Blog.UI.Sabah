var app = angular.module('HomeApp', []);

app.controller("HomeController", function ($scope, $http) {

    $scope.UserList = WebApi.Result;

  

    
});


var html = "<p>Uğurcan</p>";
html += "<p>Nedim</p>";
html += "<p>Attilla</p>";
$("#users").html(html);


