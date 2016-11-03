import angular from 'angular';

import templateUrl from './skillAvatar.html';

class skillAvatarController {}

const name = 'skillAvatar';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: skillAvatarController,
  controllerAs: name,
  bindings: {
    width: '<',
  },
});
