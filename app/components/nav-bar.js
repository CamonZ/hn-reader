import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nav-bar'],
  isExpanded: false,

  actions: {
    requestExpand() {
      this.sendAction('expand');
    }
  }
});
