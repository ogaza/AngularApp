angular.module("app")
    .directive("note",
        function() {
            return {
                restrict: "E",
                scope: {
                    model: "="                    
                },
                templateUrl: "../app/shared/directives/noteView.html"
            };
        });