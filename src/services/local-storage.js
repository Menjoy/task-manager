/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.services.localStorage', [])
        .factory('$localStorage', LocalStorage);

    LocalStorage.$inject = ['$window'];

    function LocalStorage($window) {

        function Storage(callback) {
            this.storage = $window.localStorage;
            angular.element($window).on('storage', callback);
        }

        Storage.prototype.set = function(key, value) {
            this.storage.setItem(key, JSON.stringify(value));
        };

        Storage.prototype.get = function(key) {
            return JSON.parse(this.storage.getItem(key));
        };

        Storage.prototype.remove = function(key) {
            this.storage.removeItem(key);
        };

        Storage.prototype.clear = function() {
            this.storage.clear();
        };

        return Storage;
    }

})();
