app.controller('LoginCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {
        $scope.doLogin = function(user) {
            Auth.login(user, function(data) {
                if (data.user != undefined){
                    $state.go('app.home');
                }
                console.log(data);
                //                $state.go('app.home');
            }, function(data) {
                console.log(data)
            });

        };
    }
]);