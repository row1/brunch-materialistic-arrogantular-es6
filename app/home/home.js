import HomeCtrl from './home.ctrl';

HomeCtrl.$inject = ['photoService'];

export default angular.module('app.home', [])
  .controller('HomeCtrl', HomeCtrl);