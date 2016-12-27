import DS from 'ember-data';

export default DS.Model.extend({
  isDead:    DS.attr('boolean'),
  body:      DS.attr('string'),
  quality:   DS.attr('number'),
  submitter: DS.attr('string'),
  submitted: DS.attr('string'),
  parent:    DS.belongsTo('comment', { inverse: 'comments', async: false }),
  comments:  DS.hasMany('comment', { inverse: 'parent', async: false }),
  story:     DS.belongsTo('story', { async: false }),

  descendantsCount: function() {
    return this.get('comments').reduce( (count, comment) => count + comment.get('descendantsCount'), this.get('comments.length') );
  }.property('comments'),

  nestedCommentsCount: function() {
    return this.get('descendantsCount') - this.get('comments.length');
  }.property('descendantsCount', 'comments.length')
});
