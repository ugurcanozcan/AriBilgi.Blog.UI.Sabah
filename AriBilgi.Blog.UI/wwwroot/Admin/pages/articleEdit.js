

app.controller("ArticleEditController", function ($scope, $http) {

    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    };

    $http({
        method: "GET",
        headers: GetHeader(),
        url: "https://localhost:7071/api/Category/GetAllNonDeleted"
    }).then(function (response) {
        $scope.categoryList = response.data;
    })

    $http({
        method: "GET",
        headers: GetHeader(),
        url: "https://localhost:7071/api/Article/GetById?id=" + $scope.GetUrlParameter("Id")
    }).then(function (response) {
        $scope.article = response.data;
        $scope.article.categoryId = $scope.article.category.id;
    });

   

    $scope.ArticleEdit = function () {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7071/api/Article/Update?articleId=" + $scope.GetUrlParameter("Id"),
            data: $scope.article
        }).then(function (response) {
            alert("Makale başarıyla güncellenmiştir.");
        });
    }


  

});