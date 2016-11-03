import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

//pages
import home from '../home/home';
import organisation from '../organisation/organisation';
import profile from '../profile/profile';

import templateUrl from './root.html';

class rootController {}

const name = 'root';
export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  uiRouter,
  home.name,
  organisation.name,
  profile.name,
]).component(name, {
  templateUrl,
  controller: rootController,
  controllerAs: name,
})
.config(config);
function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}
