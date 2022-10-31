angular.module('pvtApp').factory('trialStore', function ($location) {
    var trialStore = { };
    var prefix = "TRIAL";
	
	const { Pool } = require('pg');
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
    
	//var store = $window.localStorage;
    
	var undoData = null;
	var url = $location.absUrl();
	
    trialStore.save = function (data, id) {
        if (!(data && data.length > 0)) {
            return false;
        }
		
		// create an id with url, similar to "https://fabiancito97.github.io/?id=<id>#/trial";
		var id = url; // get url;
		// clean url to get the identifier
		var id = id.substring(0, id.lastIndexOf('#/trial'));
        var id = id.substring(id.lastIndexOf("/") + 1);
		if (id) id = id.substring(id.lastIndexOf('?id=') + 4);
		
        // if empty, asing a identifier based on miliseconds since 01-01-1970;
        else id = prefix + ',' + Date.now();
		
		var dataColl = data.join()
		
		await pool.query(`INSERT INTO "pvtData" ("Id", "Pvt") VALUES ($1, $2)` [id, dataColl]);
		await pool.end();
        return id;
    };

    trialStore.load = function (id) {
        return store.getItem(id).split(',').map(parseFloat);
    };

    trialStore.remove = function (id) {
        return store.removeItem(prefix + ',' + id);
    };

    trialStore.all = function () {
        var results = [];
        for (var i = 0; i < store.length; i++) {
            var key = store.key(i);
            if (key.substr(0, prefix.length) === prefix) {
                results.push({
                    'date': parseInt(key.substr(prefix.length + 1)),
                    'data': store.getItem(key).split(',').map(parseFloat)
                });
            }
        }
        return results;
    };

    trialStore.deleteAll = function () {
        undoData = trialStore.all();
        $.each(undoData, function (i,v) {
            trialStore.remove(v.date);
        });
    };

    trialStore.undoDelete = function () {
        if (undoData) {
            $.each(undoData, function (i,v) {
                trialStore.save(v.data, v.date);
            });
            undoData = null;
        }
    };

    trialStore.hasUndo = function () { return undoData != null; };

    return trialStore;
	*/
});
