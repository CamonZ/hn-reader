import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  tag: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  source: DS.attr('string'),
  body: DS.attr('string'),
  points: DS.attr('number'),
  submitted: DS.attr('string'),
  submitter: DS.attr('string'),
  commentsCount: DS.attr('number'),

  comments:  DS.hasMany('comment', { async: false }),

  isInternal: Ember.computed('url', function() {
    var url = this.get('url');
    return url && url.indexOf('https://news.ycombinator.com/item') === 0;
  }),

  votable: Ember.computed('points', function() {
    return this.get('points') !== null;
  }),

  commentable: Ember.computed('commentsCount', function() {
    return this.get('commentsCount') !== null;
  })
});
