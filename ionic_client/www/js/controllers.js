angular.module('quiz4all.controllers', [])

  .controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
  })
  .controller('QuizzesController', ['$scope', 'Quiz', function ($scope, Quiz) {
    $scope.Quizzes = Quiz.find(
      {
        filter: {
          include: [
            'appuser'
          ]
        }
      }
    );
  }])
  .controller('RunQuizController', ['$scope', '$stateParams', '$state', 'quiz', 'questions', 'attemptService',
    function ($scope, $stateParams, $state, quiz, questions, attemptService) {
      attemptService.clearAttempt();
      $scope.quiz = quiz;
      $scope.questions = questions;
      attemptService.clearAttempt();

      console.log('w RunQuizController $scope.questions');
      console.log($scope.questions);
    }
  ])
  .controller('QuizQuestionController', ['$scope', '$stateParams', '$state', 'attemptService',
    function ($scope, $stateParams, $state, attemptService) {

      console.log('w QuizQuestionController');
      console.log($scope);

      $scope.CurrentQuestionNum = Number($stateParams.qid);
      $scope.CurrentQuestion = $scope.$parent.questions[$scope.CurrentQuestionNum];
      $scope.QuestionsCount = $scope.$parent.questions.length;
      $scope.QuizProgressCss = {width: ($scope.CurrentQuestionNum + 1) / $scope.QuestionsCount * 100 + '%'};
      $scope.CurrentQuestionSelectedAnswerId = '';

      $scope.showPrevBt = 'false';
      $scope.showNextBt = 'true';
      $scope.disableNextBt = 'true';
      $scope.showSubmitQuizBt = '';

      angular.forEach($scope.CurrentQuestion.answers, function (val, key) {
        if (val.rightfl == 1) {
          ($scope.RightAnswerId = val.id)
        }
      });

      $scope.nextQuestion = function () {
        $state.go('app.runquiz.quizquestion', {id: $stateParams.id, qid: $scope.CurrentQuestionNum + 1});
        attemptService.addAttemptAnswer(
          {
            qid: $scope.CurrentQuestion.id,
            rightAnswerId: $scope.RightAnswerId,
            givenanswerId: $scope.CurrentQuestionSelectedAnswerId,
            wasRight: angular.equals($scope.CurrentQuestionSelectedAnswerId, $scope.RightAnswerId) ? true : false
          });
        console.log(attemptService.attemptAnswers);

        //
        // attempt = [{
        //   id: '123',
        //   quizid: '1',
        //   attemptAnswers: [
        //     {
        //       qid: 1,
        //       rightAid: 1,
        //       givenAid: 1,
        //       wasRight: 1,
        //     },
        //     {
        //       qid: 2,
        //       rightAid: 1,
        //       givenAid: 2,
        //       wasRight: 0,
        //     }]
        // }]
        ;
      };

      $scope.prevQuestion = function () {
        $state.go('app.runquiz.quizquestion', {id: $stateParams.id, qid: $scope.CurrentQuestionNum - 1});
        attemptService.clearLastAnswer();
        console.log(attemptService.attemptAnswers);
      };

      $scope.submitQuiz = function () {
        attemptService.addAttemptAnswer(
          {
            qid: $scope.CurrentQuestion.id,
            rightAnswerId: $scope.RightAnswerId,
            givenanswerId: $scope.CurrentQuestionSelectedAnswerId,
            wasRight: angular.equals($scope.CurrentQuestionSelectedAnswerId, $scope.RightAnswerId) ? true : false
          });
        console.log(attemptService.attemptAnswers);
        $state.go('app.runquiz.quizsummary', {id: $stateParams.id});
      };

      ($scope.CurrentQuestionNum > 0) ? $scope.showPrevBt = true : $scope.showPrevBt = false;
      ($scope.CurrentQuestionNum < $scope.QuestionsCount - 1) ? $scope.showNextBt = true : $scope.showNextBt = false;
      ($scope.CurrentQuestionNum == $scope.QuestionsCount - 1) ? $scope.showSubmitQuizBt = true : $scope.showSubmitQuizBt = false;

    }])
  .controller('QuizSummaryController', ['$scope', '$stateParams', '$state', 'attemptService',
    function ($scope, $stateParams, $state, attemptService) {
      $scope.questionIdx='';
      $scope.Questions = $scope.$parent.questions;
      $scope.QuestionsCount = $scope.$parent.questions.length;
      $scope.Answers = attemptService.getAttemptAnswers();
      $scope.RightAnswersCnt = attemptService.getRightAnswersCnt();
      console.log('-----------Quiz Summary--------------');
      console.log('$scope.Answers');
      console.log($scope.Answers);
      console.log('$scope.Questions');
      console.log($scope.Questions);
    }])
;
