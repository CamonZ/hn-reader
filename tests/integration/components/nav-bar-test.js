import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('renders the component with the app icon', function(assert) {
  this.render(hbs`{{nav-bar}}`);

  let component = this.$('.nav-bar');

  assert.ok(component.is(':visible'), 'component is rendered');
  assert.ok(component.find('.front-page-link').is(':visible'), 'frontpage stories link is rendered');
  assert.ok(component.find('.latest-link').is(':visible'), 'latest stories link is rendered');
  assert.ok(component.find('.active-link').is(':visible'), 'most active stories link is rendered');
  assert.ok(component.find('.show-hn-link').is(':visible'), ' stories link is rendered');
  assert.ok(component.find('.ask-hn-link').is(':visible'), 'ask hn stories link is rendered');
  assert.ok(component.find('.jobs-link').is(':visible'), 'show hn stories link is rendered');
  assert.ok(component.find('.preferences-link').is(':visible'), 'preferences link is rendered');
 });
