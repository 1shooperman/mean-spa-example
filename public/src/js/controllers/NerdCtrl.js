// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope, NerdService) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    
    $scope.nerds = {};
    NerdService.get().then(function(response) {
        $scope.nerds = response.data;
    }, function(error) {
        console.log(error);
    });
});
