(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'app.view1',
        'app.view2',
        'app.version',
        'app.handSelector'
    ])
        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/handSelector'});
    }]);

})();