/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.dashboard', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('root.dashboard', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'build/modules/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            });
    }
})();