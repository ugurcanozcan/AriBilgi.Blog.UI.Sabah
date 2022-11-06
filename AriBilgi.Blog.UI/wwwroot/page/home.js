app.controller("HomeController", function ($scope, $http) {

    $scope.GetArticleList = function () {
        $http({
            method: "GET",
            url:"https://localhost:7071/api/Article/GetAllNonDeleted"
        }).then(function (response) {
            $scope.articleList = response.data;
        })
    }

    $scope.GetArticleList();


})