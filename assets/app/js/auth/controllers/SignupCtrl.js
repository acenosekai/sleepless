app.controller('SignupCtrl', ['$scope', 'Auth', function ($scope, Auth) {
    $scope.doSignup = function (user) {
        
        console.log($scope.formSignup);
        
//        console.log($scope.formSignup.email);
//        if (document.getElementById('signup-form').checkValidity()) {
//            Auth.signUp(user, function () {
//
//            }, function () {
//
//            });
//        } else {
//            console.log("error")
//        }

    };
}]);