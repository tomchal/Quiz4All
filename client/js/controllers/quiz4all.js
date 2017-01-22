angular
  .module('app')
  .controller('QuizzesController', ['$scope', 'Quiz', function ($scope, Quiz) {
    $scope.Quizzes = Quiz.find();
  }])
  .controller('NewQuizController', ['$scope', '$rootScope', 'Quiz', 'Question', 'Answer', 'FileUploader','$state', function ($scope, $rootScope, Quiz, Question, Answer, FileUploader, $state) {
    //Create new Quiz form code;
    $scope.currentQuestion = 0;

    $scope.quiz = {
      "image": "quizDefault.png",
      // "createdById": $rootScope.currentUser.id,
      questions: [
        {
          answers: [
            {
              "rightfl": 0
            }
          ]
        }
        //   {
        //     "qtext": "Where is Warsaw?",
        //     "id": 3,
        //     "quizId": 2,
        //     answers: [
        //       {
        //         "atext": "Poland",
        //         "rightfl": 1,
        //         "id": 2,
        //         "questionId": 3
        //       }
        //     ]
        //   }
      ]
    }

    // Quiz image uploader
    $scope.uploader = new FileUploader({
        scope: $scope,                          // to automatically update the html. Default: $rootScope
        url: '/api/containers/quizimg/upload',
        formData: [
          {key: 'value'}
        ]
      }
    );

    // Check if the file is  an image - I'll ignore non image files.
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Watch upload queue to display image on the page
    $scope.$watch('uploader.queue[0]', function (newValue, oldValue) {
      if ($scope.uploader.queue.length > 0) {
        $scope.quiz.image = $scope.uploader.queue[0].file.name;
      }
    });

    $scope.addQuestion = function () {
      $scope.quiz.questions.push(
        {
          answers: [
            {
              "rightfl": 0
            }
          ]
        });
      $scope.currentQuestion = $scope.quiz.questions.length - 1;
    };
    $scope.goToQuestion = function (index) {
    };

    $scope.removeQuestion = function () {
      $scope.quiz.questions.splice($scope.currentQuestion, 1);
      $scope.currentQuestion = $scope.quiz.questions.length - 1;
    };

    $scope.addAnswer = function (questionIdx) {

      $scope.quiz.questions[questionIdx].answers.push({rightfl: false});
    };

    $scope.removeAnswer = function (questionIdx, index) {

      $scope.quiz.questions[questionIdx].answers.splice(index, 1);
    };

    //Save Quiz first then questions then answers
    $scope.saveQuiz = function () {
      if($scope.uploader.queue[0]){
        $scope.uploader.queue[0].upload();
      }
      Quiz.create({
          name: $scope.quiz.name,
          desc: $scope.quiz.desc,
          image: $scope.quiz.image,
          createdById: $rootScope.currentUser.id,
          created: Date.now(),
          lastUpdated: Date.now()
        })
        .$promise
        .then(function (newQuiz) {
          angular.forEach($scope.quiz.questions, function (val, key) {
            Question.create({
                qtext: val.qtext,
                quizId: newQuiz.id,
                createdById: $rootScope.currentUser.id,
                created: Date.now(),
                lastUpdated: Date.now()
              })
              .$promise
              .then(function (newQuestion) {
                angular.forEach($scope.quiz.questions[key].answers, function (val1, key1) {
                  Answer.create({
                      atext: val1.atext,
                      rightfl: val1.rightfl ? 1 : 0,
                      questionId: newQuestion.id,
                      createdById: $rootScope.currentUser.id,
                      created: Date.now(),
                      lastUpdated: Date.now()
                    })
                    .$promise
                    .then(
                      function (newAnswer) {
                        $state.go('quizzes');
                      },
                      function (answerError) {
                        console.log('answer uh oh: ', answerError);   // 'uh oh: something bad happened’
                      }
                    );
                });
              });
          })
        });
    }

  }])
  .controller('RunQuizController', ['$scope', '$stateParams', '$state', 'quiz', 'questions', 'attemptService',
    function ($scope, $stateParams, $state, quiz, questions, attemptService) {
      attemptService.clearAttempt();
      $scope.quiz = quiz;
      $scope.questions = questions;
      attemptService.clearAttempt();
    }
  ])
  .controller('QuizQuestionController', ['$scope', '$stateParams', '$state', 'attemptService',
    function ($scope, $stateParams, $state, attemptService) {

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
        $state.go('runquiz.quizquestion', {id: $stateParams.id, qid: $scope.CurrentQuestionNum + 1});
        attemptService.addAttemptAnswer(
          {
            qid: $scope.CurrentQuestion.id,
            rightAnswerId: $scope.RightAnswerId,
            givenanswerId: $scope.CurrentQuestionSelectedAnswerId,
            wasRight: angular.equals($scope.CurrentQuestionSelectedAnswerId, $scope.RightAnswerId) ? true : false
          });
      };

      $scope.prevQuestion = function () {
        $state.go('runquiz.quizquestion', {id: $stateParams.id, qid: $scope.CurrentQuestionNum - 1});
        attemptService.clearLastAnswer();
      };

      $scope.submitQuiz = function () {
        attemptService.addAttemptAnswer(
          {
            qid: $scope.CurrentQuestion.id,
            rightAnswerId: $scope.RightAnswerId,
            givenanswerId: $scope.CurrentQuestionSelectedAnswerId,
            wasRight: angular.equals($scope.CurrentQuestionSelectedAnswerId, $scope.RightAnswerId) ? true : false
          });
        $state.go('runquiz.quizsummary', {id: $stateParams.id});
      };

      ($scope.CurrentQuestionNum > 0) ? $scope.showPrevBt = true : $scope.showPrevBt = false;
      ($scope.CurrentQuestionNum < $scope.QuestionsCount - 1) ? $scope.showNextBt = true : $scope.showNextBt = false;
      ($scope.CurrentQuestionNum == $scope.QuestionsCount - 1) ? $scope.showSubmitQuizBt = true : $scope.showSubmitQuizBt = false;

    }])
  .controller('QuizSummaryController', ['$scope', '$stateParams', '$state', 'attemptService',
    function ($scope, $stateParams, $state, attemptService) {
      $scope.Questions = $scope.$parent.questions;
      $scope.QuestionsCount = $scope.$parent.questions.length;
      $scope.Answers = attemptService.getAttemptAnswers();
      $scope.RightAnswersCnt = attemptService.getRightAnswersCnt();
    }])
