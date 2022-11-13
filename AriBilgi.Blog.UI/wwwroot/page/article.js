app.controller("ArticleController", function ($scope, $http, $sce) {

    $scope.GetArticle = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Article/GetById?id=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.article = response.data;
        })
    }


    $scope.GetArticle();


    $scope.AddComment = function () {

        $scope.addComment.articleId = GetUrlParameter("Id");

        $http({
            method: "POST",
            url: "https://localhost:7071/api/Comment/Add",
            data: $scope.addComment
        }).then(function (response) {
            $scope.GetArticle();
            alert("Yorum Başarıyla Eklenmiştir.");
        });
    }

    $scope.trustAsHtml = function (html) {
        return $sce.trustAsHtml(html);
    }
});