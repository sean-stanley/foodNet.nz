import angular from 'angular';

import templateUrl from './promoSplash.html';

class promoSplashController {}

const name = 'promoSplash';
export default angular.module(name, []).component(name, {
  templateUrl,
  controller: promoSplashController,
  controllerAs: name,
  bindings: {
    text: '@',
  },
});
