angular.module("app")
    .controller("addNoteController",
    [
        "$scope", "$location", "notesService",
        function($scope, $location, notesService) {

            $scope.note = {
                text: ""
            };

            $scope.saveNote = function() {

                notesService.save($scope.note);

                $location.path("/notes");
            };
        }
    ])
    .controller("editNoteController",
    [
        "$scope", "$location", "$routeParams", "notesService",
        function($scope, $location, $routeParams, notesService) {

            var noteFromService = notesService.get($routeParams.id);

            $scope.note = {
                id: noteFromService.id,
                text: noteFromService.text
            };

            $scope.saveNote = function () {

                notesService.save($scope.note);

                $location.path("/notes");
            };
        }
    ])
    .controller("deleteNoteController",
    [
        "$scope", "$location", "$routeParams", "notesService",
        function($scope, $location, $routeParams, notesService) {
            notesService.remove($routeParams.id);
            $location.path("/notes");
        }
    ]);
