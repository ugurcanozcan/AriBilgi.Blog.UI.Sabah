var app = angular.module('CategoryApp', []);

app.controller("CategoryController", function ($scope, $http) {

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Category/GetAll"
        }).then(function (response) {
            $scope.categoryList = response.data;
        });
    }

    $scope.GetCategoryList();

  
  

    $scope.CategoryDelete = function (id) {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Category/Delete?categoryId=" + id
        }).then(function (response) {
            alert("Kategori silinmiştir.");
            $scope.GetCategoryList();
        });
    }

});