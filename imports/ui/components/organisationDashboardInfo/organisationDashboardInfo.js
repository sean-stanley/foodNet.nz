import angular from 'angular';

import organisationAvatar from '../organisationAvatar/organisationAvatar';
import organisationSplash from '../organisationSplash/organisationSplash';
import organisationLocation from '../organisationLocation/organisationLocation';

import templateUrl from './organisationDashboardInfo.html';

class organisationDashboardInfoController {}

const name = 'organisationDashboardInfo';
export default angular.module(name, [
  organisationAvatar.name,
  organisationSplash.name,
  organisationLocation.name,
]).component(name, {
  templateUrl,
  controller: organisationDashboardInfoController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
