'use strict';

angular.module('app.handSelector', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/handSelector', {
            templateUrl: 'hand-selector/hand-selector.tpl.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', [function() {

    }]);