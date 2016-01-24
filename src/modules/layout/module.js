/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.layout', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'build/modules/layout/layout.html'
                    }
                }
            });
    }
})();