import angular from 'angular';

import templateUrl from './organisationLocation.html';

class organisationLocationController {}

const name = 'organisationLocation';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: organisationLocationController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
