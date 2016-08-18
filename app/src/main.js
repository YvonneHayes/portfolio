import angular from 'angular';
import app from './app';
// import './scss/main.scss';
import router from './router';

app.config(router);

app.value('apiUrl', 'http://localhost:9000/api');

angular.bootstrap(document, [app.name]);
