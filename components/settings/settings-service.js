angular.module("pvtApp").factory('settings', function ($rootScope, $window) {
    var vals = {}; // holds actual setting values
    var settings = {}; // holds setting getters and setters (returned)
    //var store = $window.localStorage;

    var makeSetting = function (name, default_value) {
        var newProp = {};

        // Create auto-saving setters for each value
        newProp[name] = {
            get: function () { return vals[name]; },
            set: function (x) { vals[name] = x; save(); }
        };
        Object.defineProperties(settings, newProp);

        // add default value to backing settings object
        vals[name] = default_value;
    };

    //var save = function () {
    //    store.setItem("TRSETTINGS", JSON.stringify(vals));
    //};

    // get saved settings

    //var saved = JSON.parse(store.getItem("TRSETTINGS") || "{}");

    // Setting definitions

    makeSetting("lapse_threshold", 500); // lapse threshold in ms
    makeSetting("trial_length", 60); // length of trial in seconds
    makeSetting("show_instructions", false);

    return settings;
});
