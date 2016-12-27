import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['stories'],

  filterName: Ember.computed.alias('controllers.stories.filterName'),

  storyDetailsContainerClasses: Ember.computed('model.isInternal', function() {
    let classes = ['story-reader-content'];

    if (this.get('model.isInternal')) {
      classes.pushObject('internal');
    }

    return classes.join(' ');
  })
});
