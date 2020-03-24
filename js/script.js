/*codigo de javaScript*/ 


// *******************************************************************

/*
    codigo de javaScript
*/ 
console.log("Ejecutando js.")


// let key = "AIzaSyDYi3QYBIxrJt_QL0gbTL_d8KZNjnVV1Yw";
// let TotalResultado = 20;
// let busqueda = "javascript";


// *******************************************************************

/*
    codigo de angular js
*/ 

var app = angular.module("app",[]);
app.controller("appCtrl",function($scope, $rootScope, $http){

    console.log("Ejecutando Angular js");

    $scope.key = "AIzaSyDYi3QYBIxrJt_QL0gbTL_d8KZNjnVV1Yw";
    $scope.TotalResultado = 15;
    $scope.busqueda = "javascript";
    $scope.part = "snippet";

    // $http({
    //     method : "GET",
    //     url : "https://www.googleapis.com/youtube/v3/search?part=" + $scope.part + "&q=" + $scope.busqueda + "&maxResults=" + $scope.TotalResultado + "&key=" + $scope.key 
    // }).then(function mySuccess(response) {
    //     console.log(response);
    //     for (let i = 0; i < $scope.TotalResultado; i++) {
    //         console.log(response.data.items[i].id.videoId);
    //         console.log(response.data.items[i].snippet.title);
    //     }
    // });


    $rootScope.youtube = [];


    $http({
        method : "GET",
        url : "https://www.googleapis.com/youtube/v3/search?part=" + $scope.part + "&q=" + $scope.busqueda + "&maxResults=" + $scope.TotalResultado + "&key=" + $scope.key 
    }).then((response) => {
        $rootScope.youtube.push(response);
        console.log(response);
        for (let i = 0; i < $scope.TotalResultado; i++) {
            console.log(response.data.items[i].id.videoId);
            console.log(response.data.items[i].snippet.title);
        }
        
    });

});

// *******************************************************************

/*
    codigo de angular js
*/ 

$(document).ready(function(){

    console.log("Ejecutando Jquery js");

});

// *******************************************************************






















