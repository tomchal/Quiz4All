/**
 * Created by TCH on 2016-12-29.
 */

module.exports = function (app) {
  app.dataSources.TchMySql.automigrate('appuser', function (err) {
    if (err) throw err;

    app.models.appuser.create(
      [
        {
          email: 'admin@q.com',
          password: 'admin',
          created: Date.now()
        }
        ,
        {
          email: 'tchalows@gmail.com',
          password: 'tomek1',
          created: Date.now()
        }
      ], function (err, quizzes) {
        if (err) throw err;

        console.log('Users created: \n', quizzes);
      });
  });
};


