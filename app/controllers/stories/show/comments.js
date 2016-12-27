import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['highlight'],
  comments: Ember.computed.alias('model')
});
