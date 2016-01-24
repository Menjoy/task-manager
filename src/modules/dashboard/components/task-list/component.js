/* global angular */

(function() {
    'use strict';

    angular
        .module('tManager.dashboard')
        .directive('dashboardTaskList', DashboardTaskList);

    function DashboardTaskList() {
        return {
            link: link,
            templateUrl: 'build/modules/dashboard/components/task-list/template.html',
            restrict: 'EA',
            scope: {
                list: '=dashboardTaskList'
            },
            controller: DashboardTaskListController
        };

        function link(scope, element, attrs) {
            scope.listLabel = attrs.listLabel;
            scope.listType = attrs.listType;
        }
    }

    DashboardTaskListController.$inject = ['$scope', 'TaskList'];

    function DashboardTaskListController($scope, TaskList) {
        $scope.move = function(task, index, status) {
            if (task.status === status) {
                return;
            }

            TaskList.move(task, index, status);
        };

        $scope.remove = function(task, index) {
            TaskList.remove(task, index);
        };
    }

})();
