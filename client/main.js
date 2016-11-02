import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-material/angular-material.css';

import root from './../imports/ui/layouts/root/root';
import './main.css';

var myApp = angular.module('food-net', [
  angularMeteor,
  root.name,
]);
