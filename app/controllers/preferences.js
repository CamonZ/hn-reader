import Ember from 'ember';

export default Ember.Controller.extend({
  topLevelOnly: Ember.computed('preferences.autoFoldDepth', function() {
    return this.get('preferences.autoFoldDepth') < 1;
  }),

  foldingThresholdBlockClasses: Ember.computed('preferences.autoFold', function() {
    let classes = ['row'];

    if (!this.get('preferences.autoFold')) {
      classes.pushObject('hidden');
    }

    return classes.join(' ');
  })
});
