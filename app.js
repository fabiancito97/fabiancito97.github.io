
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);



var pvtApp = angular.module("pvtApp", [
    'mgcrea.ngStrap',
    'ui.router',
    'ngAnimate'
]);

// Fixing Angular issue that breaks blob links
pvtApp.config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
});

pvtApp.config(function ($stateProvider) {
    $stateProvider.state('pretrial', {
        url: '/pretrial',
        template: "<div ui-view></div>",
        controller: 'PreTrialCtrl'
    })
    .state('pretrial.countdown', {
        url: '/countdown',
        templateUrl: 'pretrial/pretrial.countdown.html',
        controller: 'PreTrialCountdownCtrl'
    })
    .state('trial', {
        url: '/trial',
        templateUrl: 'trial/trial.html',
        controller: 'TrialCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    })
	.state('final', {
        url: '/final',
        templateUrl: 'final/final.html',
        controller: 'FinalCtrl'
    })
});

//.state('pretrial.instructions', {
//        url: '/instructions', //
//        templateUrl: 'pretrial/pretrial.instructions.html',
//        controller: 'PreTrialInstructionsCtrl'
//    })
//    .state('settings', {
//        url: '/settings',
//        templateUrl: 'settings/settings.html',
//        controller: 'SettingsCtrl'
//    .state('results', {
//        url: '/results',
//        templateUrl: 'results/results.html',
//        controller: 'ResultsCtrl'
//    })
//    .state('results.trial', {
//        url: '/:trialId',
//        templateUrl: 'results/results.trial.html',
//        controller: 'ResultsTrialCtrl'
//    })
//    .state('results.all', {
//        templateUrl: 'results/results.all.html',
//        controller: 'AllResultsCtrl'
//    })
//    .state('results.empty', {
//        templateUrl: 'results/results.empty.html'
//    })


// set the first states!!!!

pvtApp.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/pretrial/countdown')
});
