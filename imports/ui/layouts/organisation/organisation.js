import angular from 'angular';

import header from '../../components/header/header';
import organisationDashboardInfo from '../../components/organisationDashboardInfo/organisationDashboardInfo';
import organisationDashboardIO from '../../components/organisationDashboardIO/organisationDashboardIO';

import templateUrl from './organisation.html';

class organisationController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.searchFilter = '';
    this.searchActive = false;

    //helpers TODO: redo this when database is installed
    this.helpers({
      organisation(){
        return {_id:"someId", name:"Whangarei Food Co-op", tags:"carrots", tagLine: "Local - Fresh - Affordable",
                description:{short:"spoon hammer fork", long:"spoon hammer fork mustard cheese"},
                address:"1 Woods Road", openingHours:"Tuesdays 3-6pm"};
      }
    });
  }
}

const name = 'organisation';
export default angular.module(name, [
  header.name,
  organisationDashboardInfo.name,
  organisationDashboardIO.name,
]).component(name, {
  templateUrl,
  controller: organisationController,
  controllerAs: name,
})
.config(config);
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('organisation', {
      url: '/organisation',
      template: '<organisation></organisation>'
    });
};
