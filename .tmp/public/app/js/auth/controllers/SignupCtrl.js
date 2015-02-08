app.controller('SignupCtrl', ['$scope','$state', 'Auth', function ($scope,$state, Auth) {
    $scope.doSignup = function (user) {
        $scope.formSignup.$setSubmitted();
        if ($scope.formSignup.$valid) {
            Auth.signUp(user, function () {
                
            }, function () {

            });
        } else {
            console.log("error")
        }

    };
}]);