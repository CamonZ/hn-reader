import Ember from 'ember';

export default Ember.Controller.extend({
  showingNavBar: false,

  wrapperClasses: Ember.computed('showingNavBar', function() {
    let classes = ['app-main'];

    if (this.get('showingNavBar')) {
      classes.pushObject('slide-out');
    }

    return classes.join(' ');
  }),

  actions: {
    toggleNavBar: function() {
      this.toggleProperty('showingNavBar');
    }
  }
});
