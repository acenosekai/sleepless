// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.login', {
      url: '/login',
      templateUrl: 'app/js/auth/templates/login.tpl.html',
      controller: 'LoginCtrl'
    })
    .state('app.logout', {
      url: '/logout',
//      templateUrl: 'app/js/auth/templates/signout.tpl.html',
      controller: 'LogoutCtrl'
    })
    .state('app.register', {
      url: '/register',
      templateUrl: 'app/js/auth/templates/register.tpl.html',
      controller: 'RegisterCtrl'
    });

}]);