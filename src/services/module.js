/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.services', [
            'tManager.services.localStorage',
            'tManager.services.taskList'
        ])
        .run(run)
        .config(config);

    function run() {

    }

    function config() {

    }

})();
