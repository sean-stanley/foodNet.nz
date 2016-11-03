import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import authLoginButton from '../authLoginButton/authLoginButton';
import searchBar from '../searchBar/searchBar';
import userAvatar from '../userAvatar/userAvatar';

import templateUrl from './header.html';

class headerController {
  constructor($scope, $reactive, $mdSidenav, $state, $rootScope) {
    'ngInject';
    $reactive(this).attach($scope);

    //set up scope variables
    this.go = $state.go;

    //watch for state changes
    $scope.$watch($state.current.name, function(){
      $scope.currentNavItem =  $state.current.name;
    });

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      $scope.currentNavItem = toState.name;

    });

    //toggle side menu
    this.toggle = () => {
      $mdSidenav('menu').toggle();
    };

    //helpers TODO: implement users properly when new database installed
    this.helpers({
      user() {
        return {_id:"someId", emails:[{address:"admin@admin.co.nz"}]};
      },
      userActive() {
        return true;
      },
    });
  }

  goTo(location){
    this.go(location);
  }
}

const name = 'header';
export default angular.module(name, [
  authLoginButton.name,
  searchBar.name,
  userAvatar.name,
]).component(name, {
  templateUrl,
  controller: headerController,
  controllerAs: name,
  bindings: {
    title: '@',
    searchFilter: '=',
    searchActive: '=',
    searchDisabled: '<',
  },
});
