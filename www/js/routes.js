angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.assajos'
      2) Using $state.go programatically:
        $state.go('tabsController.assajos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
      /page1/tab3/page2
  */
    .state('tabs',
      {
        url:'/tabs',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      }
    )
    .state('tabs.assajos',
    {
      url: '/assajos',
      views: {
        'assajos-tab': {
          templateUrl: 'templates/assajos.html',
          controller: 'assajosCtrl'
        }
      }
    })
    .state('tabs.actuacions',
      {
        url: '/actuacions',
        views: {
          'actuacions-tab':
          {
            templateUrl: 'templates/assajos.html',
            controller: 'actuacionsCtrl'
          }
      }
    })
    .state('tabs.social',
      {
        url: '/social',
        views: {
          'social-tab':
          {
            templateUrl: 'templates/assajos.html',
            controller: 'socialCtrl'
          }
        }
      })


    .state('assaigDetail', {
      url: '/event/:eventId',
      templateUrl: 'templates/assaigDetail.html',
      controller: 'assaigDetailCtrl'
    })


  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'signinCtrl'
    });


$urlRouterProvider.otherwise('/tabs/assajos');



});
