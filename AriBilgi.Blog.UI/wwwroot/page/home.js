app.controller("HomeController", function ($scope, $http, $sce) {

    $scope.GetArticleList = function () {
        $http({
            method: "GET",
            url:"https://localhost:7071/api/Article/GetAllNonDeleted"
        }).then(function (response) {
            $scope.articleList = response.data;
        })
    }

    $scope.GetArticleList();

    $scope.trustAsHtml = function (html) {
        return $sce.trustAsHtml(html);
    }
})