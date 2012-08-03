// Filename: app/views/events/list.js

define([
  'Underscore',
  'Backbone',
  'js/app/collections/events.js',
  'text!/templates/events/event.html'
], function( _, Backbone, EventCollection, list){
	var listView = Backbone.View.extend({
		initialize: function() {
			this.collection = new EventCollection;
			this.collection.add({ name : "Event 1", eid: "1234"});
			this.collection.add({ name : "Event 2", eid: "1234"});
			this.collection.add({ name : "Event 3", eid: "1234"});
			
			var compiledTemplate = _.template(list, {events : this.collection.models});
			this.$el.html(compiledTemplate);
		}
	});
	return new listView({ el : $('#list')});
});
