var app = angular.module('ArticleApp', []);

app.controller("ArticleController", function ($scope, $http) {

    $scope.GetArticleList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Article/GetAll"
        }).then(function (response) {
            $scope.articleList = response.data;
        });
    }

    $scope.GetArticleList();

  
  

    $scope.ArticleDelete = function (id) {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Article/Delete?articleId=" + id
        }).then(function (response) {
            alert("Makale silinmiştir.");
            $scope.GetArticleList();
        });
    }

    $scope.ArticleActive = function (id) {
        $http({
            method: "PUT",
            url: "https://localhost:7071/api/Article/SetActive?articleId=" + id
        }).then(function (response) {
            alert("Makale aktifleştirildi.");
            $scope.GetArticleList();
        });
    }

});