app.controller("ArticleController", function ($scope, $http) {

    $scope.GetArticle = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Article/GetById?id=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.article = response.data;
        })
    }


    $scope.GetArticle();
});