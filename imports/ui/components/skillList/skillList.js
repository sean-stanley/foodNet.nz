import angular from 'angular';

import skillAvatar from '../skillAvatar/skillAvatar';

import templateUrl from './skillList.html';

class skillListController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //helpers TODO: redo this when database is installed
    this.helpers({
      skills(){
        return [{_id:"someId", name:"leetHaxoring", description:"spooon!", level:"Senior"},
                {_id:"someOtherId", name:"Java", description:"spooon!", level:"Intermediate"}];
      },
    });
  }
}

const name = 'skillList';
export default angular.module(name, [
  skillAvatar.name,
]).component(name, {
  templateUrl,
  controller: skillListController,
  controllerAs: name,
  bindings: {
    user: '<',
  },
});
