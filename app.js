var tikhur = angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/home' , {
                templateUrl: "js/home/home.html"
            })
            .when('/food' , {
                templateUrl: "js/food/food.html"
            })
            .when('/blog' , {
                templateUrl: "js/blog/blog.html",
                controller : "BlogController" 
            })
            .when('/blog/:blogpost' , {
                templateUrl: "js/blog/blogpost.html",
                controller: "BlogPostController"
            })
            .when('/aboutchef' , {
                templateUrl: "js/aboutChef/aboutchef.html"
            })
            .when('/vendor' , {
                templateUrl: "js/foodVendor/food-vendor.html"
            })
            
        
            .otherwise({
                redirectTo : "/home"  
            
            })
            $locationProvider.html5Mode(true);
            
    });


    tikhur .directive('navbarDirective', function(){
    return {
        restrict : 'A',
        templateUrl: 'navbar-footer-template/navbar-template.html'
    }

    });

    tikhur.directive('footerDirective', function(){
    return {
        restrict : 'A',
        templateUrl: 'navbar-footer-template/footer-template.html'
    }

    });

    tikhur.filter('truncate', function(){
        return function(words){
                if(words.length >= 30){
                    return words.substr(0,20) + '...' ;
                }
                
            
            };
    });
    
