app.factory('Auth', ['$http',
    function ($http) {
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
                if(user == undefined){
                    user = {};
                }
                    user.action = 'register';
                    user.provider = 'local';
                    $http.post('/api/signup', user).
                    success(function (data, status, headers, config) {
                        console.log(data);
                        success(data);
                    }).
                    error(function (data, status, headers, config) {
                        console.log(data);
                        error(data);
                    });
            },
        };
}]);