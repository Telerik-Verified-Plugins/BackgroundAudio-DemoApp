// this is just a random audio stream
var myaudioURL = 'http://stream.4zzzfm.org.au:789/;';
var myaudio = new Audio(myaudioURL);

(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};
    
    DemoViewModel = kendo.data.ObservableObject.extend({

        play: function () {
            myaudio.play();
        },

        stop: function () {
            myaudio.pause();
        }

    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);