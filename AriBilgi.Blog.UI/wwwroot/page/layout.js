var app = angular.module("BlogSiteApp", []);


function GetUrlParameter(parmeterName) {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const result = urlParams.get(parmeterName);
    if (result == null) {
        return "";
    }
    else {
        return result;
    }
}

app.controller("MenuController", function ($scope, $http) {

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7071/api/Category/GetAllNonDeleted"
        }).then(function (response) {
            $scope.categoryList = response.data;
        })
    }

    $scope.GetCategoryList();



});



