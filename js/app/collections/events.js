// Filename: events.js
define([
  'Underscore', 
  'Backbone',
  'app/models/event'
], function( _, Backbone, eventModel){
  var eventCollection = Backbone.Collection.extend({
  	model: eventModel
  });
  return eventCollection;
});
