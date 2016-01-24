/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'TaskList'];

    function DashboardCtrl($scope, TaskList) {
        $scope.list = TaskList.data.list;
        $scope.taskText = '';

        $scope.addTask = function($event) {
            $scope.taskText = $scope.taskText.trim();

            if (!$scope.taskText) {
                return;
            }

            if ($event.keyCode === 13 || $event.which === 1) {
                TaskList.add($scope.taskText);
                $scope.taskText = '';
            }
        };
    }

})();