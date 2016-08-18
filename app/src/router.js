configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        header: {component:'headerPart'},
        main: { component: 'home' },
      },
    })
    .state('about', {
      url: '/about',
      views: {
        header: {component:'headerPart'},
        main: { component: 'about' },
      },
    })
    .state('blog', {
      url: '/blog',
      views: {
        header: {component:'headerPart'},
        main: { component: 'blog' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
