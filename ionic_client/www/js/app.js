// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', [
    'ionic',
    'lbServices',
    'quiz4all.controllers'
  ])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(function() {
      return {
        request: function(req) {
          // Transform **all** $http calls so that requests that go to `/`
          // instead go to a different origin, in this case localhost:3000
          if (req.url.charAt(0) === '/') {
            req.url = 'http://localhost:3000' + req.url;
            // and make sure to send cookies too
            req.withCredentials = true;
          }

          return req;
        }
      };
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: "",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('app.quizzes', {
        url: "/quizzes",
        views: {
          'quizzes-tab': {
            templateUrl: "templates/quizzes.html",
            controller: 'QuizzesController'
          }
        }
      })
      .state('app.runquiz', {
        cache: false,
        url: '/runquiz/:id',
        abstract: true,
        views: {
          'run-quiz': {
            templateUrl: "templates/runquiz.html",
            controller: 'RunQuizController'
          }
        },
        resolve: {
          quiz: function (Quiz, $stateParams) {
            return Quiz.findById({id: $stateParams.id})
              .$promise
              .then(function (quiz) {
                  console.log('resolve quiz');
                  console.log(quiz);
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
                console.log('resolve Questions');
                console.log(Questions);
                return Questions;
              })
          }

        }
      })
      .state('app.runquiz.quizquestion', {
        cache: false,
        url: '/quizquestion/:qid',
        views: {
          'quizquestion': {
            templateUrl: 'templates/quizquestion.html',
            controller: 'QuizQuestionController'
          }
        }
      })
      .state('app.runquiz.quizsummary', {
        cache: false,
        url: '/quizsummary',
        views: {
          'quizsummary': {
            templateUrl: 'templates/quizsummary.html',
            controller: 'QuizSummaryController'
          }
        }
      })
      .state('app.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "templates/about.html"
          }
        }
      })
      .state('app.contact', {
        url: "/contact",
        views: {
          'contact-tab': {
            templateUrl: "templates/contact.html"
          }
        }
      });


    $urlRouterProvider.otherwise("/quizzes");

  });
