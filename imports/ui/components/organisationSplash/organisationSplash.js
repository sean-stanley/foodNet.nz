import angular from 'angular';

import templateUrl from './organisationSplash.html';

class organisationSplashController {}

const name = 'organisationSplash';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: organisationSplashController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
