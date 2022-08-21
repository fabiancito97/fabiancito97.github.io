angular.module('pvtApp').controller('TrialCtrl', function ($scope, $state, $document, trialTimer) {//trialStore, , settings
    $scope.data = [];
    $scope.timer = trialTimer;
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
        if (value) { $scope.data.push(value); }
    });

    
    trialTimer.onDisable.add(function () {
        //var date = trialStore.save($scope.data);
		// go to final template
        //$state.go('results.trial', { trialId: date }); // loads most recent result
		$state.go('final'); // go to final
    });

    $scope.$on("$destroy", function () {
        $document.off("keydown", keyBindHandler);
        $document.off("click", mouseHandler);
    });

    //settings.

    trialTimer.enable(trial_length * 1000); 
    $document.on("keydown", keyBindHandler);
    $document.on("click", mouseHandler);
});