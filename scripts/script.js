angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/home' , {
                templateUrl: "Templates/home.html",
                controller : "homeController"
            })
            .when('/blog' , {
                templateUrl: "Templates/blog.html",
                controller : "blogController"
            })
            .when('/aboutchef' , {
                templateUrl: "Templates/aboutchef.html",
                controller : "aboutchefController"
                })
        
            .otherwise({
                redirectTo : "/home"    
            
            })
            $locationProvider.html5Mode(true);
            
    });
    
    
