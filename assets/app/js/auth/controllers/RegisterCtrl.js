app.controller('RegisterCtrl', ['$scope','$state', 'Auth', function ($scope,$state, Auth) {
    $scope.doRegister = function (user) {
        $scope.formSignup.$setSubmitted();
        if ($scope.formSignup.$valid) {
            Auth.register(user, function (data) {
                $state.go('app.signin');
            }, function (data) {
                console.log(data)
            });
        } else {
            console.log("error")
        }

    };
}]);