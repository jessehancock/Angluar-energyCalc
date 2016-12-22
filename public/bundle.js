angular.module('app', []);
angular.module('brioApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/component/views/home/home.html'
  }).state('about', {
    url: '/about',
    templateUrl: './app/component/views/about/about.html'
  });
}]);