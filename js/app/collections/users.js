// Filename: users.js
define([
  'Underscore', 
  'Backbone',
  'app/models/user'
], function( _, Backbone, userModel){
  var UserCollection = Backbone.Collection.extend({
  	model: userModel
  });
  return UserCollection;
});
