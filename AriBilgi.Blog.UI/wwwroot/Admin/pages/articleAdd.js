var app = angular.module('ArticleAddApp', []);

app.controller("ArticleAddController", function ($scope, $http) {

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Category/GetAllNonDeleted"
        }).then(function (response) {
            $scope.categoryList = response.data;
        })
    }

    $scope.GetCategoryList();

    $scope.ArticleAdd = function () {
        $http({
            method: "POST",
            url: "https://localhost:7071/api/Article/Add",
            data: $scope.article
        }).then(function (response) {
            alert("Makale başarıyla eklenmiştir.");
        })
    }

});