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
            .otherwise({
                redirectTo: "/"
            });;
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
