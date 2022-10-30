var app = angular.module('CategoryAddApp', []);

app.controller("CategoryAddController", function ($scope, $http) {

    $scope.CategoryAdd = function () {
        $http({
            method: "POST",
            url: "https://localhost:7071/api/Category/Add",
            data: $scope.category
        }).then(function (response) {
            alert("Kategori başarıyla eklenmiştir.");
        })
    }

});