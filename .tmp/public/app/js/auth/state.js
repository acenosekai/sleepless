// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.signin', {
      url: '/signin',
      templateUrl: 'app/js/auth/templates/signin.tpl.html',
      controller: 'SigninCtrl'
    })
    .state('app.signout', {
      url: '/about',
      templateUrl: 'app/js/auth/templates/signout.tpl.html',
      controller: 'SignoutCtrl'
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: 'app/js/auth/templates/signup.tpl.html',
      controller: 'SignupCtrl'
    });

}]);