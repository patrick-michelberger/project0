// Filename: app/views/users/log.js

define([
  'Underscore',
  'Backbone',
  'js/app/collections/users.js',
  'text!/templates/users/log.html'
], function( _, Backbone, UserCollection, list){
	var userLogView = Backbone.View.extend({
		initialize: function() {
			this.collection = new UserCollection;
			this.collection.add({ name : "Klaus Michelberger", eid: "1234"});
			this.collection.add({ name : "Patrick Michelberger", eid: "1234"});
			this.collection.add({ name : "Anton Michelberger", eid: "1234"});
			
			var compiledTemplate = _.template(list, {people : this.collection.models});
			this.$el.html(compiledTemplate);
		}
	});
	//return new userLogView({ el : $('#login')});
});
