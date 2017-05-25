// Templates
import HomeTemplate from './home/home.html'
import AboutTemplate from './about/about.html'
import ShopTemplate from './shop/shop.html'
import CheckoutTemplate from './checkout/checkout.html'

/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");

   $stateProvider
       .state('home', {
           url: "/",
           controller : "HomeCtrl as home",
           templateUrl: HomeTemplate
       })
       .state('shop', {
           url: "/shop",
           controller : "ShopCtrl as shop",
           templateUrl: ShopTemplate
       })
       .state('about', {
           url: "/about",
           controller : "AboutCtrl as about",
           templateUrl: AboutTemplate
       })
       .state('checkout', {
           url: "/checkout",
           controller : "CheckoutCtrl as checkout",
           templateUrl: CheckoutTemplate
       });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export { Router }
