var app = angular.module('BlogAdminApp', []);

if (localStorage.getItem("webtoken") == null) {
    window.location.href = "/Admin/Login/Index";
}

function Logout() {
    localStorage.removeItem("webtoken");
    window.location.href = "/Admin/Login/Index";
}

function GetHeader() {
    return {
        'ContentType': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("webtoken")
    }
}

app.controller('LayoutLeftMenuController', function ($scope, $http) {

    $scope.GetUsername = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7071/api/User/GetNameSurname"
        }).then(function (response) {
            $scope.NameSurname = response.data;
        });
    }

    $scope.GetUsername();
});