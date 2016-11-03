import angular from 'angular';

import organisationSummary from '../organisationSummary/organisationSummary';

import templateUrl from './organisationList.html';

class organisationListController {
  constructor($scope, $reactive, $state) {
    'ngInject';
    $reactive(this).attach($scope);

    //set up scope variables
    this.go = $state.go;

    //TODO: create database for this
    this.organisations =
      [ {_id:"someId", name:"Super Awesome Company", tags:"carrots"},
        {_id:"someOtherId", name:"A Company", tags:"beans"},
        {_id:"someMoreId", name:"Another Company", tags:"HTML"},
        {_id:"someAlternateId", name:"Yet Another Company", tags:"Lamb"},];

  }

  goTo(location){
    this.go(location);
  }
}

const name = 'organisationList';
export default angular.module(name, [
  organisationSummary.name,
]).component(name, {
  templateUrl,
  controller: organisationListController,
  controllerAs: name,
  bindings: {
    searchFilter: '<',
    limitTo: '<',
  },
});
