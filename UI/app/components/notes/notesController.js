angular.module("app")
    .controller("notesController",
    [
        "$scope", function($scope) {
            $scope.notes = [];

            for (var i = 0; i < 10; i++) {
                $scope.notes.push({
                    author: "Author " + i,
                    text: "this is note " + i,
                    created: new Date()
                });
            }
        }
    ]);
