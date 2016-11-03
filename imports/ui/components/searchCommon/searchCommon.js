import angular from 'angular';

import templateUrl from './searchCommon.html';

class searchCommonController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //TODO: create database for this
    this.commonSearches =   ["Carrots", "Organic Fertilizer", "Lamb Mince", "Tomatoes",
                             "Websites", "Packaging", "HTML", "Lettuce", "Organic Sweeteners"];

  }
}

const name = 'searchCommon';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: searchCommonController,
  controllerAs: name,
  bindings: {
    searchFilter: '=',
    searchActive: '=',
  },
});
