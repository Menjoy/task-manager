/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.services.taskList', [])
        .service('TaskList', TaskList);

    TaskList.$inject = ['$localStorage', '$rootScope'];

    function TaskList($localStorage, $rootScope) {
        var storageKey = 'tManager.taskList',
            storage = new $localStorage(_storageUpdated),
            self = this;

        self.data = {
            list: {
                wait: [],
                active: [],
                completed: []
            }
        };

        self.fetch = fetch;
        self.add = add;
        self.clear = clear;
        self.move = move;
        self.remove = remove;

        fetch();

        function fetch() {
            var list = _get();

            if (list) {
                self.data.list = list;
            }

            return self;
        }

        function add(text) {
            self.data.list.wait.push({
                text: text,
                status: 'wait'
            });

            _update(self.data.list);
        }


        function clear() {
            storage.clear();
            return self;
        }

        function move(task, index, status) {
            var spliced = self.data.list[task.status].splice(index, 1);

            spliced[0].status = status;
            self.data.list[status] = Array.prototype.concat.apply(self.data.list[status], spliced);

            _update(self.data.list);
        }

        function remove(task, index) {
            self.data.list[task.status].splice(index, 1);

            _update(self.data.list);
        }

        function _get() {
            return storage.get(storageKey);
        }

        function _update(value) {
            self.data.list = value;
            storage.set(storageKey, value);
            return self;
        }

        function _storageUpdated(event) {
            if (event.key === storageKey) {
                angular.copy(JSON.parse(event.newValue), self.data.list);
                $rootScope.$apply();
            }
        }
    }

})();
