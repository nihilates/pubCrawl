angular.module('pubcrawl')
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/taverns', {
      templateUrl: 'app/auth/taverns.html',
      controller: 'TavernController'
    })
    .otherwise({
      redirectTo: '/gen'
    });
});
