import angular from 'angular';

import userAvatar from '../userAvatar/userAvatar';

import templateUrl from './userInfo.html';

class userInfoController {}

const name = 'userInfo';
export default angular.module(name, [
  userAvatar.name,
]).component(name, {
  templateUrl,
  controller: userInfoController,
  controllerAs: name,
  bindings: {
    user: '<',
  },
});
