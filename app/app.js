import home from './home/home';

var dependencies = [
  'ngMaterial',
  'ui.router',
  'app.home'
];

config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
run.$inject = ['$rootScope', '$state', '$stateParams'];

function config($urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/');

  $mdThemingProvider.theme('default')
  .primaryPalette('green')
  .accentPalette('light-green');
}

function run ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}

export default angular.module('app', dependencies)
  .config(config)
  .run(run);