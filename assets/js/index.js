var app= angular.module('myCount', []);
app.controller('myCtrl',function($scope,$http)
    {
        $http.get("http://api.ifest-uajy.com/v1/hackfest/count")
        .then(function(response){
            $scope.counthackfest = response.data.data;
        });

        $http.get("http://api.ifest-uajy.com/v1/seminar/count")
        .then(function(response){
            $scope.countseminar = response.data.data;
        });
        $http.get("http://api.ifest-uajy.com/v1/i2c/1/count")
        .then(function(response){
            $scope.counti2c1 = response.data.data;
        });
        $http.get("http://api.ifest-uajy.com/v1/i2c/2/count")
        .then(function(response){
            $scope.counti2c2 = response.data.data;
        });
});
