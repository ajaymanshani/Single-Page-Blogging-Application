//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBlog'
        })
        .when('/create',{
        	templateUrl     : 'views/create-view.html',
        	controller 		: 'blogCreateController',
        	controllerAs 	: 'currentBlog'
        })
        .when('/blog/:blogId',{

        	templateUrl     : 'views/blog-view.html',
        	controller 		: 'singleBlogController',
        	controllerAs 	: 'singleBlog'
        })

        .when('/edit/:blogId',{

            templateUrl     : 'views/edit-view.html',
            controller      : 'editBlogController',
            controllerAs    : 'editBlog'


        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);