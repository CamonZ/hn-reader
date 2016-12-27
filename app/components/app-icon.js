import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: ['app-icon', 'icon-menu'],
  classNameBindings: ['isExpanded:rotate-cw'],
  attributeBindings: ['testSelector:data-test-app-icon:'],
  testSelector: true
});
