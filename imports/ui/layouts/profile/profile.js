import angular from 'angular';

import header from '../../components/header/header';
import userInfo from '../../components/userInfo/userInfo';
import userAssociations from '../../components/userAssociations/userAssociations';
import userSkills from '../../components/userSkills/userSkills';
import organisationList from '../../components/organisationList/organisationList';

import templateUrl from './profile.html';

class profileController {
  constructor($scope, $reactive, $mdSidenav, $state, $rootScope) {
    'ngInject';
    $reactive(this).attach($scope);

    //set up scope variables
    this.searchFilter = '';
    this.searchActive = false;

    //helpers TODO: implement users properly when new database installed
    this.helpers({
      user() {
        return {_id:"someId", emails:[{address:"admin@admin.co.nz"}],
                profile:{name:"Some Name", phone:"021 111 1111", email:"some@email.co.nz",
                address:{vacinity:"Whangarei, Northland"},
                description:{short:"I am good at everything"}}};
      },
    });
  }
}

const name = 'profile';
export default angular.module(name, [
  userInfo.name,
  userAssociations.name,
  userSkills.name,
  organisationList.name,
]).component(name, {
  templateUrl,
  controller: profileController,
  controllerAs: name,
})
.config(config);
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: '<profile></profile>'
    });
};
