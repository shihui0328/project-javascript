// Define the 'clientApp' module
angular.module('clientApp', [
    // ...which depends on the 'restaurantList' module
    'ngRoute',
    'ngCart',
    'cart',
    'restaurantDelete',
    'restaurantDetail',
    'restaurantEdit',
    'restaurantList',
    'restaurantNew',
    'menuNew',
    'menuDelete',
    'menuEdit'
]);
