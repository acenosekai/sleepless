app.factory('Auth', ['session','$http',
    function (session,$http) {
        return {
//            getSession: function () {
//                return session;
//            },
//            signIn: function (user, succes, error) {
//                console.log("doSignIn");
//                //                if (login.username == "admin" && login.password == "admin") {
//                //                    session.isLogedIn = true;
//                //                    return true;
//                //                } else {
//                //                    return false;
//                //                }
//            },
            signUp: function (user, success, error) {
                if (user != undefined) {
                    $http.post('/api/signup', user).
                    success(function (data, status, headers, config) {
                        console.log(data);
                        success();
                    }).
                    error(function (data, status, headers, config) {
                        console.log(data);
                        error();
                    });
                } else {
                    error();
                }
            },
        };
}]);