angular.module("app")
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/",
            {                
                templateUrl: "../app/components/home/homeView.html",
                controller: "homeController  as homeCtrl"
            })
            .when("/about",
            {
                templateUrl: "../app/components/about/aboutView.html",
                controller: "aboutController  as aboutCtrl"
            })
            .when("/notes",
            {
                templateUrl: "../app/components/notes/notesView.html",
                controller: "notesController  as notesCtrl"
            })
            .when("/notes/add",
            {
                templateUrl: "../app/components/notes/addNoteView.html",
                controller: "addNoteController  as addNoteController"
            })
            .when("/notes/edit/:id",
            {
                templateUrl: "../app/components/notes/addNoteView.html",
                controller: "editNoteController  as editNoteController"
            })
            .when("/notes/del/:id",
            {
                template: "",
                controller: "deleteNoteController  as deleteNoteController"
            })
            .otherwise({
                redirectTo: "/"
            });;
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
