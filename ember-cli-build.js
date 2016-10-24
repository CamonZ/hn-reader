/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/entypo-plus/scss/',
      ]
    }
  });

  app.import(app.bowerDirectory + '/entypo-plus/fonts/entypo-plus.eot', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/entypo-plus/fonts/entypo-plus.svg', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/entypo-plus/fonts/entypo-plus.ttf', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/entypo-plus/fonts/entypo-plus.woff', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/fastclick/lib/fastclick.js');

  return app.toTree();
};
