
var file;
var fileName;

app.controller("ArticleAddController", function ($scope, $http) {

    $("#flpUpload").change(function () {

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            file = new Uint8Array(event.target.result).toString();
        }
        fileReader.readAsArrayBuffer(event.target.files[0]);

        fileName = event.target.files[0].name;

        $("#articleFilePreview").attr("src", URL.createObjectURL(event.target.files[0]));

    });



    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7071/api/Category/GetAllNonDeleted"
        }).then(function (response) {
            $scope.categoryList = response.data;
        })
    }

    $scope.GetCategoryList();

    $scope.ArticleAdd = function () {

        $scope.article.file = file;
        $scope.article.fileName = fileName;
        $scope.article.content = CKEDITOR.instances['editor'].getData();

        $http({
            method: "POST",
            headers: GetHeader(),
            url: "https://localhost:7071/api/Article/Add",
            data: $scope.article
        }).then(function (response) {
            alert("Makale başarıyla eklenmiştir.");
        })
    }

   

});