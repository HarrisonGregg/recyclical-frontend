angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.recyclical', {
    url: '/',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recyclical.html',
        controller: 'recyclicalCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.whereToRecycle', {
    url: '/where-to-recycle',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whereToRecycle.html',
        controller: 'whereToRecycleCtrl'
      }
    }
  })

  .state('menu.nearbyLocations', {
    url: '/where-to-recycle/:type',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nearbyLocations.html',
        controller: 'nearbyLocationsCtrl'
      }
    }
  })

  .state('menu.location', {
    url: '/location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/location.html',
        controller: 'locationCtrl'
      }
    }
  })

  .state('menu.zeroWasteNYC', {
    url: '/zero-waste-nyc',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zeroWasteNYC.html',
        controller: 'zeroWasteNYCCtrl'
      }
    }
  })

  .state('menu.recycling101', {
    url: '/recycling-101',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recycling101.html',
        controller: 'recycling101Ctrl'
      }
    }
  })

  .state('menu.wasteType', {
    url: '/waste-type/:categoryId/:itemId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wasteType.html',
        controller: 'wasteTypeCtrl'
      }
    }
  })

  .state('menu.aboutRecyclical', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutRecyclical.html',
        controller: 'aboutRecyclicalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/')

  

});