import Ember from 'ember';

const filterToTitle = {
  'front-page': 'Front Page',
  latest: 'Latest Submissions',
  active: 'Active',
  'show-hn': 'Show HN',
  'ask-hn': 'Ask HN'
};

export default Ember.Controller.extend({
  queryParams: ['filter', 'page'],

  filter: 'front-page',
  page: null,

  stories: Ember.computed.alias('model'),

  filterName: Ember.computed('filter', function() {
    return filterToTitle[this.get('filter')] || '';
  }),

  contentClasses: Ember.computed('stories.length', function() {
    let classes = ['app-content'];

    if (this.get('stories.length')) {
      classes.pushObject('active');
    }

    return classes.join(' ');
  })
});
