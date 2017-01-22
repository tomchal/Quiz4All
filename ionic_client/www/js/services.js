/**
 * Created by TCH on 2017-01-19.
 */

angular.module('app')
  .service('attemptService', function () {
    this.attemptAnswers = [];
    this.addAttemptAnswer = function (attemptAnswer) {
      this.attemptAnswers.push(attemptAnswer);
    };
    this.clearAttempt = function () {
      this.attemptAnswers = [];
    };
    this.clearLastAnswer = function () {
      this.attemptAnswers.pop();
    }
    this.getAttemptAnswers = function () {
      return this.attemptAnswers;
    }

    this.getRightAnswersCnt = function () {
      var RightAnswersCnt = 0;
      this.attemptAnswers.forEach(function (val, key) {
        if (val.wasRight) {
          RightAnswersCnt = RightAnswersCnt + 1;
        }
      });
      console.log('RightAnswersCnt');
      console.log(RightAnswersCnt);

      return RightAnswersCnt;
    }
  })
;
