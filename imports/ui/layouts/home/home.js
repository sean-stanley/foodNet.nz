import angular from 'angular';

import header from '../../components/header/header';
import promoSplash from '../../components/promoSplash/promoSplash';
import searchCommon from '../../components/searchCommon/searchCommon';
import organisationList from '../../components/organisationList/organisationList';

import templateUrl from './home.html';

class homeController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //set up scope variables
    this.searchFilter = '';
    this.searchActive = false;
  }
}

const name = 'home';
export default angular.module(name, [
  header.name,
  promoSplash.name,
  searchCommon.name,
  organisationList.name,
]).component(name, {
  templateUrl,
  controller: homeController,
  controllerAs: name,
})
.config(config);
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
};
