// Filename: main.js
requirejs.config({
	paths: {
	    Underscore: 'lib/underscore/underscore',
	    Backbone: 'lib/backbone/backbone'
	},
    
    shim: {
        'lib/underscore/underscore-min': {
            //	Once loaded, use the global 'Backbone' as the
            //	module value.
            exports: 'Underscore-min'
        },
        'lib/backbone/backbone-min': {
            deps: ['lib/underscore/underscore-min'],
            //	A function can be used to generate the exported value.
            //	"this" for the function will be the global object.
            //	The dependencies will be passed in as function arguments.
            exports: 'Backbone-min'
        }
    }
    
});

require(['app/app', 'lib/underscore/underscore-min', 'lib/backbone/backbone-min'], 
	function(App){
		
});
