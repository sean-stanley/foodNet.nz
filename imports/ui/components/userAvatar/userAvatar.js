import angular from 'angular';

import templateUrl from './userAvatar.html';

class userAvatarController {}

const name = 'userAvatar';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: userAvatarController,
  controllerAs: name,
  bindings: {
    width: '=',
  },
});
