import angular from 'angular';

import iOAvatar from '../iOAvatar/iOAvatar';

import templateUrl from './iOOutputList.html';

class iOOutputListController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //helpers TODO: redo this when database is installed
    this.helpers({
      outputs(){
        return [{_id:"someId", name:"carots"}, {_id:"someOtherId", name:"beatroot"}];
      },
    });
  }
}

const name = 'iOOutputList';
export default angular.module(name, [
  iOAvatar.name,
]).component(name, {
  templateUrl,
  controller: iOOutputListController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
