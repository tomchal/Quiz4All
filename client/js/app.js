// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'ngMaterial',
    'lbServices',
    'ui.bootstrap',
    'xeditable',
    'angularFileUpload'
  ])
  .config(
    function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('indigo')
        .warnPalette('red');
    })
  .config(
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                       $urlRouterProvider) {
      $stateProvider
      // .state('add-review', {
      //   url: '/add-review',
      //   templateUrl: 'views/review-form.html',
      //   controller: 'AddReviewController',
      //   authenticate: true
      // })
        .state('quizzes', {
          url: '/quizzes',
          templateUrl: 'views/quizzes.html',
          controller: 'QuizzesController'
        })
        .state('runquiz', {
          url: '/runquiz/:id',
          abstract: true,
          templateUrl: 'views/runquiz.html',
          controller: 'RunQuizController',
          resolve: {
            quiz: function (Quiz, $stateParams) {
              return Quiz.findById({id: $stateParams.id})
                .$promise
                .then(function (quiz) {
                    return quiz;
                  }
                );
            },
            questions: function (Question, $stateParams) {
              return Question.find(
                {
                  filter: {
                    where: {
                      quizId: $stateParams.id
                    },
                    include: 'answers'
                  }
                }
                )
                .$promise
                .then(function (Questions) {
                  return Questions;
                })
            }

          }
        })
        .state('runquiz.quizquestion', {
          url: '/quizquestion/:qid',
          views: {
            'quizquestion': {
              templateUrl: 'views/quizquestion.html',
              controller: 'QuizQuestionController'
            }
          }
        })
        .state('runquiz.quizsummary', {
          url: '/quizsummary',
          views: {
            'quizsummary': {
              templateUrl: 'views/quizsummary.html',
              controller: 'QuizSummaryController'
            }
          }
        })
        .state('newquiz', {
          url: '/newquiz',
          templateUrl: 'views/newquiz.html',
          controller: 'NewQuizController',
          authenticate: true
        })
        .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html'
        })
        $urlRouterProvider.otherwise('quizzes');
    }])
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
      return RightAnswersCnt;
    }
  })
  .run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', 'editableOptions', function ($rootScope, $state, LoopBackAuth, AuthService,editableOptions) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      // redirect to login page if not logged in
      if (toState.authenticate && !LoopBackAuth.accessTokenId) {
        event.preventDefault(); //prevent current page from loading

        // Maintain returnTo state in $rootScope that is used
        // by authService.login to redirect to after successful login.
        // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
        $rootScope.returnTo = {
          state: toState,
          params: toParams
        };

        $state.go('forbidden');
      }
    });

    // Get data from localstorage after pagerefresh
    // and load user data into rootscope.
    if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
      AuthService.refresh(LoopBackAuth.accessTokenId);
    }

    editableOptions.theme = 'bs3';
  }])
;
