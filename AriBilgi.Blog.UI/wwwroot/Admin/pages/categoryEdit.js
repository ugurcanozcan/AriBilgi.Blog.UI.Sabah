

app.controller("CategoryEditController", function ($scope, $http) {

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
        url: "https://localhost:7071/api/Category/Get?categoryId=" + $scope.GetUrlParameter("Id")
    }).then(function (response) {
        $scope.category = response.data;
    });

    $scope.CategoryUpdate = function () {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7071/api/Category/Update?categoryId=" + $scope.GetUrlParameter("Id"),
            data: $scope.category
        }).then(function (response) {
            alert("Kategori başarıyla güncellenmiştir.");
        });
    }


  

});