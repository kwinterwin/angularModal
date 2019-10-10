angular
    .module("modal")
    .directive("modal", ["$rootScope", function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                header: "="
            },
            templateUrl: "./modal.template.html",
            link: function (scope, element, attrs, ctrl, transclude) {
                transclude(scope, function (clone, scope) {
                    scope.isModalShow = false;
                    $rootScope.$on('openModal', (event, data) => {
                        scope.isModalShow = true;
                    });
                });
            }
        }
    }]);