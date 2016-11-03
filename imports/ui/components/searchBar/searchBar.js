import angular from 'angular';

import templateUrl from './searchBar.html';

class searchBarController {}

const name = 'searchBar';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: searchBarController,
  controllerAs: name,
  bindings: {
    searchFilter: '=',
  },
});
