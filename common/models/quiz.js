'use strict';

module.exports = function(Quiz) {
  Quiz.status = function(cb) {
    var response = 'to wyląduje w statusie';
    console.log('metoda remote - test');
    cb(null, response);
  };
  Quiz.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};
