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
      url: '/about-short',
      views: {
        header: {component:'headerPart'},
        main: { component: 'about' },
      },
    })
    .state('contact', {
      url: '/contact',
      views: {
        header: {component:'headerPart'},
        main: { component: 'contact' },
      },
    })
    .state('mystory', {
      url: '/mystory',
      views: {
        header: {component:'headerPart'},
        main: { component: 'mystory' },
      },
    })
    .state('work', {
      url: '/work',
      views: {
        header: {component:'headerPart'},
        main: { component: 'work' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
