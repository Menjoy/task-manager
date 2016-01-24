/* global angular, document */

(function() {
    'use strict';

    angular.element(document);

    angular.module('tManager', [
        'ui.router',
        'tManager.services',
        'tManager.layout',
        'tManager.dashboard'
    ])
    .run()
    .config(config);

    function config($urlRouterProvider, $compileProvider) {
        $urlRouterProvider.otherwise('/');
        $compileProvider.debugInfoEnabled(false);
    }
    
})();