'use strict';
var quizdane = require('../Data/quizDane');

module.exports = function (app) {
  app.dataSources.TchMySql.automigrate(['quiz','question','answer'], function (err) {
    if (err) throw err;

    quizdane.quizzes.forEach(function (item, key) {
      app.models.quiz.create({
          name: item.name,
          desc: item.desc,
          image: item.image,
          createdById: 1,
          created: Date.now(),
          lastUpdated: Date.now()
        },
        function (err, quiz) {
          if (err) throw err;

          item.questions.forEach(function (item1, key1) {
            app.models.question.create(
              {
                qtext: item1.qtext,
                quizId: quiz.id,
                createdById: 1,
                created: Date.now(),
                lastUpdated: Date.now()
              },
              function (err, question) {
                if (err) throw err;

                item1.answers.forEach(function (item2, key2) {
                  app.models.answer.create(
                    {
                      atext: item2.atext,
                      rightfl: item2.rightfl,
                      questionId: question.id,
                      createdById: 1,
                      created: Date.now(),
                      lastUpdated: Date.now()
                    },
                    function (err, question) {
                      if (err) throw err;
                    }
                  );
                });
              });
          });
        });
      console.log('Quiz: ' + key + ' created!')
    });
  });
};
