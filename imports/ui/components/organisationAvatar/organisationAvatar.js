import angular from 'angular';

import templateUrl from './organisationAvatar.html';

class organisationAvatarController {}

const name = 'organisationAvatar';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: organisationAvatarController,
  controllerAs: name,
  bindings: {
    width: '=',
  },
});
