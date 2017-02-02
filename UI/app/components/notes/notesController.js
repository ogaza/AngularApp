angular.module("app")
    .controller("notesController",
    [
        "$scope", "notesService", function ($scope, notesService) {
            $scope.notes = notesService.getAll();
        }
    ]);
