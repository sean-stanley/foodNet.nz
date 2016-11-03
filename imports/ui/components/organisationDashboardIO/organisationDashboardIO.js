import angular from 'angular';

import iOInputList from '../iOInputList/iOInputList';
import iOOutputList from '../iOOutputList/iOOutputList';

import templateUrl from './organisationDashboardIO.html';

class organisationDashboardIOController {}

const name = 'organisationDashboardIO';
export default angular.module(name, [
  iOInputList.name,
  iOOutputList.name,
]).component(name, {
  templateUrl,
  controller: organisationDashboardIOController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
