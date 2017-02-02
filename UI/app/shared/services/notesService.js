angular.module("app")
    .factory("notesService",
        function () {

            var notes = [];

            var lastId = 0;

            for (var i = 1; i <= 5; i++) {
                notes.push({
                    id: i,
                    // author: "Author " + i,
                    text: "this is note " + i,
                    dateAdded: new Date()
                });

                lastId = i;
            }

            return {
                getAll: function() {
                    return notes;
                },
                get: function (id) {

                    var idAsInt = parseInt(id);

                    var note = notes.find(function(elem) {
                        return elem.id === idAsInt;
                    });

                    return note;
                },
                save: function (note) {
                    if (!note.id) {
                        note.id = ++lastId;
                        note.dateAdded = new Date();
                        notes.push(note);
                        return;
                    }

                    var idAsInt = parseInt(note.id);

                    var noteToEdit = notes.find(function (elem) {
                        return elem.id === idAsInt;
                    });

                    noteToEdit.text = note.text;
                },
                remove: function (id) {

                    var idAsInt = parseInt(id);

                    var idx = notes.findIndex(function(elem) {
                        return elem.id === idAsInt;
                    });

                    if (idx < 0) return;

                    notes.splice(idx, 1);
                }
            }
        });    