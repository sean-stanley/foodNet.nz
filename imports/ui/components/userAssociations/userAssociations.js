import angular from 'angular';

import templateUrl from './userAssociations.html';

class userAssociationsController {
  workingAt(userId){
    return 3
  }

  workedAt(userId){
    return 6
  }

  owned(userId){
    return 2;
  }
}

const name = 'userAssociations';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: userAssociationsController,
  controllerAs: name,
  bindings: {
    user: '<',
  },
});
