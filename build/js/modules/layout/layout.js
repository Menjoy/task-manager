/* global angular */

(function() {
    'use strict';

    config.$inject = ["$stateProvider"];
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
                        templateUrl: 'modules'
                    }
                }
            })
    }
})();