// Filename: app.js
define([
  'Underscore',
  'Backbone',
  'js/app/views/users/log.js', 
  'js/app/views/events/list.js' 
], function( _, Backbone, LogView, ListView){
  var initialize = function(){
  	console.log('App initializing');
      
  };

  return {
    initialize: initialize
  };
});