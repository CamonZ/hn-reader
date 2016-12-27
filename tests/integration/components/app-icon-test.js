import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-icon', 'Integration | Component | app icon', {
  integration: true
});

test('applies the correct css classes when collapsed and expanded', function(assert) {
  this.set('isExpanded', false);

  this.render(hbs`{{app-icon}}`);
  let component = this.$('.app-icon');

  assert.ok(component.hasClass('icon-menu'), 'has the icon-menu class');
  assert.ok(!component.hasClass('rotate-cw'), `doesn't have the 'rotate-cw' class when 'isExpanded' is false`);

  this.set('isExpanded', true);

  assert.ok(!component.hasClass('rotate-cw'), `has the 'rotate-cw' class when 'isExpanded' is true`);
});
