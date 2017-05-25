// Vendors
import angular from 'angular';
import uirouter from 'angular-ui-router';
// Custom
import { Router } from './router';
import { HomeCtrl } from './home/HomeCtrl';
import { AboutCtrl } from './about/AboutCtrl';
import { ShopCtrl } from './shop/ShopCtrl';
import { CheckoutCtrl } from './checkout/CheckoutCtrl';
console.log("Hello-1")
angular.module('angularWebpack', [uirouter])
.config(Router)
.controller('HomeCtrl', HomeCtrl)
.controller('AboutCtrl', AboutCtrl)
.controller('ShopCtrl', ShopCtrl)
.controller('CheckoutCtrl', CheckoutCtrl);
