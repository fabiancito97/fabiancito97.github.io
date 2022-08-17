var url_main = "https://github.com/fabiancito97/fabiancito97.github.io/tree/master"

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
        url: url_main + '/pretrial',
        template: "<div ui-view></div>",
        controller: 'PreTrialCtrl'
    })
    .state('pretrial.instructions', {
        url: url_main + '/instructions',
        templateUrl: url_main + '/' + 'pretrial/pretrial.instructions.html',
        controller: 'PreTrialInstructionsCtrl'
    })
    .state('pretrial.countdown', {
        url: url_main + '/countdown',
        templateUrl: url_main + '/' + 'pretrial/pretrial.countdown.html',
        controller: 'PreTrialCountdownCtrl'
    })
    .state('settings', {
        url: url_main + '/settings',
        templateUrl: url_main + '/' + 'settings/settings.html',
        controller: 'SettingsCtrl'
    })
    .state('trial', {
        url: url_main + '/trial',
        templateUrl: url_main + '/' + 'trial/trial.html',
        controller: 'TrialCtrl'
    })
    .state('results', {
        url: '/results',
        templateUrl: url_main + '/' + 'results/results.html',
        controller: 'ResultsCtrl'
    })
    .state('results.trial', {
        url: url_main + '/:trialId',
        templateUrl: url_main + '/' + 'results/results.trial.html',
        controller: 'ResultsTrialCtrl'
    })
    .state('results.all', {
        templateUrl: url_main + '/' + 'results/results.all.html',
        controller: 'AllResultsCtrl'
    })
    .state('results.empty', {
        templateUrl: url_main + '/' + 'results/results.empty.html'
    })
    .state('home', {
         url: url_main + '/',
         templateUrl: url_main + '/' + 'home/home.html',
         controller: 'HomeCtrl'
    })
});

pvtApp.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
});

