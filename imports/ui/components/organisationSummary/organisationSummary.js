import angular from 'angular';

import organisationSplash from '../organisationSplash/organisationSplash';

import templateUrl from './organisationSummary.html';

class organisationSummaryController {}

const name = 'organisationSummary';
export default angular.module(name, [
  organisationSplash.name,
]).component(name, {
  templateUrl,
  controller: organisationSummaryController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
