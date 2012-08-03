// Filename: router.js
define([
  'Underscore',
  'Backbone'
], function( _, Backbone){
  
	var Person = Backbone.Model.extend({
        initialize: function(){
            alert("Peron object created!");
        }
    });

	var initialize = function(){
    	var person1 = new Person;
  	};
	
	return {
    	initialize: initialize
 	};
});