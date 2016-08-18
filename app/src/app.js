import angular from 'angular';
import components from './components';
// import services from './services';
import router from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';


const app = angular.module('angularApp', [
  components,
  ngMaterial,
  ngAnimate,
  ngAria,
  router]);

export default app;
