import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    filter: { refreshModel: true }
  },

  model(params) {
    return this.store.query('story', params);
  },

  afterModel() { // TODO: move this elsewhere. This shouldn't be on the route.
    Ember.run.schedule('afterRender', () => Ember.$('.app-sidebar').scrollTop(0) );
  }
});
