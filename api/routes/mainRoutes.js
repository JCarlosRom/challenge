'use strict';
module.exports = function(app) {
  var Controller = require('../controllers/mainController');

  //Routes
  app.route('/')
    .post(Controller.request_handled);

  app.route('/top100')
  .get(Controller.top100);

  
};
