(function() {
    'use strict';
    angular.module('app.handSelector', [
        'ngRoute',
        'app.handRankingService',
        'app.cardService',
        'app.cardDirective'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/handSelector', {
                templateUrl: 'hand-selector/hand-selector.tpl.html',
                controller: 'View3Ctrl',
                controllerAs: 'ctrl'
            });
        }])

        .controller('View3Ctrl', function(handRankingService, cardService) {
            var ctrl = this;
            ctrl.deck = cardService.getCards();
            ctrl.ranking = 0;
            ctrl.calculate = function() {
                if (ctrl.card1 && ctrl.card2) {
                    ctrl.ranking = handRankingService.getHandRanking(ctrl.card1, ctrl.card2);
                }
            }
        });
})();