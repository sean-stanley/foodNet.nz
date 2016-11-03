import angular from 'angular';

import templateUrl from './iOAvatar.html';

class iOAvatarController {}

const name = 'iOAvatar';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: iOAvatarController,
  controllerAs: name,
  bindings: {
    width: '<',
  },
});
