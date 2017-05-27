// Vendors
import angular from 'angular';
import uirouter from 'angular-ui-router';
// Custom
import { Router } from './router';
import { HomeCtrl } from './templates/home/HomeCtrl';
import { AboutCtrl } from './templates/about/AboutCtrl';
import { ShopCtrl } from './templates/shop/ShopCtrl';
import { CheckoutCtrl } from './templates/checkout/CheckoutCtrl';

import { HeaderDirective } from './directives/headerDir';

angular.module('angularWebpack', [uirouter])
	.config(Router)
	.controller('HomeCtrl', HomeCtrl)
	.controller('AboutCtrl', AboutCtrl)
	.controller('ShopCtrl', ShopCtrl)
	.controller('CheckoutCtrl', CheckoutCtrl)
	.directive("headerDirective", () => new HeaderDirective);