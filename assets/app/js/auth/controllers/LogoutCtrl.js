app.controller('LogoutCtrl', ['$scope','$state', 'Auth', function ($scope,$state, Auth) {
    Auth.logout(
        function (data){
            console.log(data);
            $state.go('app.login');
        },
        function(data){
            console.log(data);
             $state.go('app.login');
        }
    );
//    $scope.doRegister = function (user) {
//        $scope.formSignup.$setSubmitted();
//        if ($scope.formSignup.$valid) {
//            Auth.register(user, function (data) {
//                $state.go('app.signin');
//            }, function (data) {
//                console.log(data)
//            });
//        } else {
//            console.log("error")
//        }
//
//    };
}]);