angular.module('pvtApp').controller('TrialCtrl', function ($rootScope, $state, $document, trialTimer, trialStore) {//, , settings
    $rootScope.data = [];
    $rootScope.timer = trialTimer;
    trialTimer.reset();
	
	var trial_length = 60; // seconds

    var keyBindHandler = function (e) {
        if (e.keyCode === 32) { // <Space>
            trialTimer.stop();
        }
        if (e.keyCode === 27) { // <Esc>
            trialTimer.disable();
        }
    };

    var mouseHandler = function () {
        trialTimer.stop();
        return true;
    };


    trialTimer.onStop.add(function (value) {
        if (value) { $rootScope.data.push(value); }
    });

    
    trialTimer.onDisable.add(function () {
        var date = trialStore.save($rootScope.data);
		// go to final template
        //$state.go('results.trial', { trialId: date }); // loads most recent result
		$state.go('final'); // go to final
    });

    $rootScope.$on("$destroy", function () {
        $document.off("keydown", keyBindHandler);
        $document.off("click", mouseHandler);
    });

    //settings.

    trialTimer.enable(trial_length * 1000); 
    $document.on("keydown", keyBindHandler);
    $document.on("click", mouseHandler);
});