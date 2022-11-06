app.controller("CategoryController", function ($scope, $http) {


    $scope.GetArticleList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Article/GetAllByCategoryId?categoryId=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.articleList = response.data;
        })
    }

    $scope.GetArticleList();


});