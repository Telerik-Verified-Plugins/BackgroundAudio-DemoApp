(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        isAvailable: function () {
            if (!this.checkSimulator()) {
                window.plugins.flashlight.available(function(isAvailable) {
                    navigator.notification.alert(isAvailable, null, 'Flashlight available?', 'Close');
                });
            }
        },
        
        switchOn: function () {
            if (!this.checkSimulator()) {
	            window.plugins.flashlight.switchOn(this.onSuccess, this.onError);
            }
        },

        switchOff: function () {
            if (!this.checkSimulator()) {
	            window.plugins.flashlight.switchOff(this.onSuccess, this.onError);
            }
        },

        toggle: function () {
            if (!this.checkSimulator()) {
	            window.plugins.flashlight.toggle(this.onSuccess, this.onError);
            }
        },

        checkSimulator: function() {
            if (window.plugins === undefined) {
                alert('Plugin not available. Are you running in the simulator?');
                return true;
            }
            return false;
        },

        // callbacks
        onSuccess: function(msg) {
            console.log('Succes callback: ' + msg);
        },

        onError: function(msg) {
            alert('Error callback: ' + msg);
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);