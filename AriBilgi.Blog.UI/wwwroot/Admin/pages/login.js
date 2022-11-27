var app = angular.module('LoginApp', []);

app.controller("LoginController", function ($scope, $http) {
    $scope.Login = function () {
        $http({
            method: "POST",
            url: "https://localhost:7071/api/User/Login",
            data: $scope.login
        }).then(function (response) {
            if (response.data.webtoken == null) {
                alert("Kullanıcı adı ve şifrenizi yanlış girdiniz.")
            }
            else {
                localStorage.setItem("webtoken", response.data.webtoken);
                window.location.href="/Admin/Home/Index";
            }
        });
    }
});