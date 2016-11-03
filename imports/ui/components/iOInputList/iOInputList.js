import angular from 'angular';

import iOAvatar from '../iOAvatar/iOAvatar';

import templateUrl from './iOInputList.html';

class iOInputListController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //helpers TODO: redo this when database is installed
    this.helpers({
      inputs(){
        return [{_id:"someId", name:"carots"}, {_id:"someOtherId", name:"beatroot"}];
      },
    });
  }
}

const name = 'iOInputList';
export default angular.module(name, [
  iOAvatar.name,
]).component(name, {
  templateUrl,
  controller: iOInputListController,
  controllerAs: name,
  bindings: {
    organisation: '<',
  },
});
