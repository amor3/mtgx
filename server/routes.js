/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var mysql = require('mysql');
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())


  // Insert routes below
  app.use('/api/program', require('./api/program'));




  // All undefined return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // Otherwise return to index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
