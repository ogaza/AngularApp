angular.module("app")
    .controller("notesController",
    [
        "$scope", function($scope) {
            $scope.notes = [
                {
                    text: "this is note one"
                },
                {
                    text: "this is note two"
                }
            ];             
        }
    ]);
