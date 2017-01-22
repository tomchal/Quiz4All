/**
 * Created by TCH on 2017-01-02.
 */

var quizzes = [
  {
    "name": "City Quiz",
    "desc": "This is a test geographical quiz about city location",
    "image": "city.jpg",
    "createdById": 1,
    "id": 2,
    questions: [
      {
        "qtext": "Where is Warsaw?",
        answers: [
          {
            "atext": "Germany",
            "rightfl": 0
          },
          {
            "atext": "Poland",
            "rightfl": 1
          },
          {
            "atext": "Brazil",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "New York is located in?",
        answers: [
          {
            "atext": "Spain",
            "rightfl": 0
          },
          {
            "atext": "USA",
            "rightfl": 1
          },
          {
            "atext": "Norway",
            "rightfl": 0
          },
          {
            "atext": "Australia",
            "rightfl": 0
          }
        ]
      }
    ]
  },
  {
    "name": "Math Quiz",
    "desc": "This is a test math quiz with 3 simple questions.",
    "image": "math.png",
    "createdById": 1,
    "id": 2,
    questions: [
      {
        "qtext": "2+2 is:",
        answers: [
          {
            "atext": "3",
            "rightfl": 0
          },
          {
            "atext": "4",
            "rightfl": 1
          },
          {
            "atext": "5",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "2*5 =",
        answers: [
          {
            "atext": "9",
            "rightfl": 0
          },
          {
            "atext": "10",
            "rightfl": 1
          },
          {
            "atext": "1",
            "rightfl": 0
          },
          {
            "atext": "11",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "3! equals",
        answers: [
          {
            "atext": "5",
            "rightfl": 0
          },
          {
            "atext": "6",
            "rightfl": 1
          },
          {
            "atext": "7",
            "rightfl": 0
          },
          {
            "atext": "8",
            "rightfl": 0
          }
        ]
      }
    ]
  },
  {
    "name": "HTML5 Quiz",
    "desc": "This is an HTML Quiz by W3Schools.",
    "image": "html5.jpg",
    "createdById": 1,
    "id": 2,
    questions: [
      {
        "qtext": "What does HTML stand for?",
        answers: [
          {
            "atext": "Home Tool Markup Language",
            "rightfl": 0
          },
          {
            "atext": "Hyper Text Markup Language",
            "rightfl": 1
          },
          {
            "atext": "Hyperlinks and Text Markup Language",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
          {
            "atext": "title",
            "rightfl": 0
          },
          {
            "atext": "alt",
            "rightfl": 1
          },
          {
            "atext": "longdesc",
            "rightfl": 0
          },
          {
            "atext": "src",
            "rightfl": 0
          }
        ]
      }
    ]
  },
  {
    "name": "CSS3 Quiz",
    "desc": "This is an CSS3 Quiz by W3Schools.",
    "image": "css.jpg",
    "createdById": 1,
    "id": 2,
    questions: [
      {
        "qtext": "What does CSS stand for?",
        answers: [
          {
            "atext": "Creative Style Sheets",
            "rightfl": 0
          },
          {
            "atext": "Computer Style Sheets",
            "rightfl": 0
          },
          {
            "atext": "Cascading Style Sheets",
            "rightfl": 1
          },
          {
            "atext": "Colorful Style Sheets",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "What is the correct HTML for referring to an external style sheet?",
        answers: [
          {
            "atext": '<link rel="stylesheet" type="text/css" href="mystyle.css">',
            "rightfl": 1
          },
          {
            "atext": "<stylesheet>mystyle.css</stylesheet>",
            "rightfl": 0
          },
          {
            "atext": "<style src=\"mystyle.css\">",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
          {
            "atext": 'In the <head> section',
            "rightfl": 1
          },
          {
            "atext": "At the end of the document",
            "rightfl": 0
          },
          {
            "atext": 'In the <body> section',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which HTML tag is used to define an internal style sheet?",
        answers: [
          {
            "atext": '<style>',
            "rightfl": 1
          },
          {
            "atext": "<css>",
            "rightfl": 0
          },
          {
            "atext": '<script>',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which HTML attribute is used to define inline styles?",
        answers: [
          {
            "atext": 'class',
            "rightfl": 0
          },
          {
            "atext": "style",
            "rightfl": 1
          },
          {
            "atext": 'styles',
            "rightfl": 0
          },
          {
            "atext": 'font',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which is the correct CSS syntax?",
        answers: [
          {
            "atext": 'body:color=black;',
            "rightfl": 0
          },
          {
            "atext": "{body;color:black;}",
            "rightfl": 0
          },
          {
            "atext": 'body {color: black;}',
            "rightfl": 1
          },
          {
            "atext": '{body:color=black;}',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you insert a comment in a CSS file?",
        answers: [
          {
            "atext": "' this is a comment",
            "rightfl": 0
          },
          {
            "atext": "// this is a comment",
            "rightfl": 0
          },
          {
            "atext": '// this is a comment //',
            "rightfl": 0
          },
          {
            "atext": '/* this is a comment */',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "Which property is used to change the background color?",
        answers: [
          {
            "atext": "color",
            "rightfl": 0
          },
          {
            "atext": "bgcolor",
            "rightfl": 0
          },
          {
            "atext": 'background-color',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "How do you add a background color for all <h1> elements?",
        answers: [
          {
            "atext": "h1 {background-color:#FFFFFF;}",
            "rightfl": 1
          },
          {
            "atext": "h1.all {background-color:#FFFFFF;}",
            "rightfl": 0
          },
          {
            "atext": 'all.h1 {background-color:#FFFFFF;}',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which CSS property is used to change the text color of an element?",
        answers: [
          {
            "atext": "fgcolor",
            "rightfl": 0
          },
          {
            "atext": "color",
            "rightfl": 1
          },
          {
            "atext": 'text-color',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which CSS property controls the text size?",
        answers: [
          {
            "atext": "text-style",
            "rightfl": 0
          },
          {
            "atext": "font-size",
            "rightfl": 1
          },
          {
            "atext": 'font-style',
            "rightfl": 0
          },
          {
            "atext": 'text-size',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "What is the correct CSS syntax for making all the <p> elements bold?",
        answers: [
          {
            "atext": "p {font-weight:bold;}",
            "rightfl": 1
          },
          {
            "atext": "p {text-size:bold;}",
            "rightfl": 0
          },
          {
            "atext": "<p style=\"font-size:bold;\">",
            "rightfl": 0
          },
          {
            "atext": '<p style="text-size:bold;">',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you display hyperlinks without an underline?",
        answers: [
          {
            "atext": "a {text-decoration:none;}",
            "rightfl": 1
          },
          {
            "atext": "a {decoration:no-underline;}",
            "rightfl": 0
          },
          {
            "atext": 'a {underline:none;}',
            "rightfl": 0
          },
          {
            "atext": 'a {text-decoration:no-underline;}',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you make each word in a text start with a capital letter?",
        answers: [
          {
            "atext": "You can't do that with CSS",
            "rightfl": 0
          },
          {
            "atext": "text-transform:uppercase",
            "rightfl": 0
          },
          {
            "atext": 'text-transform:capitalize',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "Which property is used to change the font of an element?",
        answers: [
          {
            "atext": "Both font-family and font can be used",
            "rightfl": 1
          },
          {
            "atext": "font",
            "rightfl": 0
          },
          {
            "atext": 'font-family',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you make the text bold?",
        answers: [
          {
            "atext": "font-weight:bold;",
            "rightfl": 1
          },
          {
            "atext": "style:bold;",
            "rightfl": 0
          },
          {
            "atext": 'font:bold;',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you display a border like this: The top border = 10 pixels, The bottom border = 5 pixels, The left border = 20 pixels,The right border = 1pixel?",
        answers: [
          {
            "atext": "border-width:10px 1px 5px 20px;",
            "rightfl": 1
          },
          {
            "atext": "border-width:10px 20px 5px 1px;",
            "rightfl": 0
          },
          {
            "atext": 'border-width:5px 20px 10px 1px;',
            "rightfl": 0
          },
          {
            "atext": 'border-width:10px 5px 20px 1px;',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which property is used to change the left margin of an element?",
        answers: [
          {
            "atext": "padding-left",
            "rightfl": 0
          },
          {
            "atext": "margin-left",
            "rightfl": 1
          },
          {
            "atext": 'indent',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "When using the padding property; are you allowed to use negative values?",
        answers: [
          {
            "atext": "Yes",
            "rightfl": 0
          },
          {
            "atext": "No",
            "rightfl": 1
          },
          {
            "atext": 'font:bold;',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How do you make a list that lists its items with squares?",
        answers: [
          {
            "atext": "list: square;",
            "rightfl": 0
          },
          {
            "atext": "list-style-type: square;",
            "rightfl": 1
          },
          {
            "atext": 'list-type: square;',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'How do you select an element with id "demo"?',
        answers: [
          {
            "atext": ".demo",
            "rightfl": 0
          },
          {
            "atext": "#demo",
            "rightfl": 1
          },
          {
            "atext": 'demo',
            "rightfl": 0
          },
          {
            "atext": '*demo',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'How do you select elements with class name "test"?',
        answers: [
          {
            "atext": ".test",
            "rightfl": 1
          },
          {
            "atext": "#test",
            "rightfl": 0
          },
          {
            "atext": 'test',
            "rightfl": 0
          },
          {
            "atext": '*test',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'How do you select all p elements inside a div element?',
        answers: [
          {
            "atext": "div p",
            "rightfl": 1
          },
          {
            "atext": "div + p",
            "rightfl": 0
          },
          {
            "atext": 'div.p',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'How do you group selectors?',
        answers: [
          {
            "atext": "Separate each selector with a comma",
            "rightfl": 1
          },
          {
            "atext": "Separate each selector with a plus sign",
            "rightfl": 0
          },
          {
            "atext": 'Separate each selector with a space',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'What is the default value of the position property?',
        answers: [
          {
            "atext": "fixed",
            "rightfl": 0
          },
          {
            "atext": "absolute",
            "rightfl": 0
          },
          {
            "atext": 'static',
            "rightfl": 1
          },
          {
            "atext": 'relative',
            "rightfl": 0
          }
        ]
      }
    ]
  },
  {
    "name": "Bootstrap3 Quiz",
    "desc": "This is an Bootstrap3 Quiz by W3Schools.",
    "image": "bootstrap.png",
    "createdById": 1,
    "id": 2,
    questions: [
      {
        "qtext": "Bootstrap 3 is mobile-first.",
        answers: [
          {
            "atext": "True",
            "rightfl": 1
          },
          {
            "atext": "False",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class provides a responsive fixed width container?",
        answers: [
          {
            "atext": '.container-fixed',
            "rightfl": 0
          },
          {
            "atext": ".container",
            "rightfl": 1
          },
          {
            "atext": ".container-fluid",
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class provides a full width container, spanning the entire width of the viewport?",
        answers: [
          {
            "atext": '.container-fluid',
            "rightfl": 1
          },
          {
            "atext": ".container",
            "rightfl": 0
          },
          {
            "atext": '.container-fixed',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "The Bootstrap grid system is based on how many columns?",
        answers: [
          {
            "atext": '6',
            "rightfl": 1
          },
          {
            "atext": "9",
            "rightfl": 0
          },
          {
            "atext": '12',
            "rightfl": 1
          },
          {
            "atext": '3',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class adds zebra-stripes to a table?",
        answers: [
          {
            "atext": '.even and .odd',
            "rightfl": 0
          },
          {
            "atext": ".table-bordered",
            "rightfl": 0
          },
          {
            "atext": '.table-striped',
            "rightfl": 1
          },
          {
            "atext": '.table-zebra',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class shapes an image to a circle?",
        answers: [
          {
            "atext": '.img-rounded',
            "rightfl": 0
          },
          {
            "atext": ".img-thumbnail",
            "rightfl": 0
          },
          {
            "atext": '.img-round',
            "rightfl": 0
          },
          {
            "atext": '.img-circle',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "Which class is used to create a big box for calling extra attention?",
        answers: [
          {
            "atext": ".jumbotron",
            "rightfl": 1
          },
          {
            "atext": ".container",
            "rightfl": 0
          },
          {
            "atext": '.bigbox',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which button class is used to create a large button?",
        answers: [
          {
            "atext": ".btn-lg",
            "rightfl": 1
          },
          {
            "atext": ".btn-xl",
            "rightfl": 0
          },
          {
            "atext": '.btn-large',
            "rightfl": 0
          },
          {
            "atext": '.btn-l',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class is used to create a button group?",
        answers: [
          {
            "atext": ".group-button",
            "rightfl": 0
          },
          {
            "atext": ".btn-group",
            "rightfl": 1
          },
          {
            "atext": '.button-group',
            "rightfl": 0
          },
          {
            "atext": '.group-btn',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "How can you insert a search icon?",
        answers: [
          {
            "atext": '<span class="glyphicon search"></span>',
            "rightfl": 0
          },
          {
            "atext": '<span class="glyphicon glyphicon-search"></span>',
            "rightfl": 1
          },
          {
            "atext": '<span class="glyph glyph-search"></span>',
            "rightfl": 0
          },
          {
            "atext": '<span class="glyphicon-search"></span>',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class is used to create a badge?",
        answers: [
          {
            "atext": ".badge",
            "rightfl": 1
          },
          {
            "atext": ".label",
            "rightfl": 0
          },
          {
            "atext": '.tag',
            "rightfl": 0
          },
          {
            "atext": '.flag',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class is used to create a basic pagination?",
        answers: [
          {
            "atext": ".navigation",
            "rightfl": 1
          },
          {
            "atext": ".pagination",
            "rightfl": 0
          },
          {
            "atext": ".page",
            "rightfl": 0
          },
          {
            "atext": '.pages',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class is used to create a basic list group?",
        answers: [
          {
            "atext": ".list-group",
            "rightfl": 1
          },
          {
            "atext": ".group-list",
            "rightfl": 0
          },
          {
            "atext": '.grouped-list',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class adds a heading to a panel?",
        answers: [
          {
            "atext": ".panel-footer",
            "rightfl": 0
          },
          {
            "atext": ".panel-heading",
            "rightfl": 1
          },
          {
            "atext": '.panel-head',
            "rightfl": 0
          },
          {
            "atext": '.panel-header',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class indicates a dropdown menu?",
        answers: [
          {
            "atext": ".select",
            "rightfl": 0
          },
          {
            "atext": ".dropdown-list",
            "rightfl": 0
          },
          {
            "atext": '.dropdown',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "A standard navigation tab is created with:",
        answers: [
          {
            "atext": '<ul class="navigation-tabs">',
            "rightfl": 0
          },
          {
            "atext": '<ul class="nav tabs">',
            "rightfl": 0
          },
          {
            "atext": '<ul class="nav nav-navbar">',
            "rightfl": 0
          },
          {
            "atext": '<ul class="nav nav-tabs">',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": "A standard navigation bar is created with:",
        answers: [
          {
            "atext": '<nav class="nav navbar">',
            "rightfl": 0
          },
          {
            "atext": '<nav class="navbar default-navbar">',
            "rightfl": 0
          },
          {
            "atext": '<nav class="navbar navbar-default">',
            "rightfl": 1
          },
          {
            "atext": '<nav class="navigationbar navbar-default">',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which class is used to create a black navigation bar?",
        answers: [
          {
            "atext": ".navbar-dark",
            "rightfl": 0
          },
          {
            "atext": ".navbar-default",
            "rightfl": 0
          },
          {
            "atext": '.navbar-inverse',
            "rightfl": 1
          },
          {
            "atext": '.navbar-black',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which plugin is used to cycle through elements, like a slideshow?",
        answers: [
          {
            "atext": "Carousel",
            "rightfl": 1
          },
          {
            "atext": "Scrollspy",
            "rightfl": 0
          },
          {
            "atext": 'Slideshow',
            "rightfl": 0
          },
          {
            "atext": 'Orbit',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": "Which plugin is used to create a modal window?",
        answers: [
          {
            "atext": "Popup",
            "rightfl": 0
          },
          {
            "atext": "Modal",
            "rightfl": 1
          },
          {
            "atext": 'Dialog Box',
            "rightfl": 0
          },
          {
            "atext": 'Window',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'Which plugin is used to create a tooltip?',
        answers: [
          {
            "atext": "Popup",
            "rightfl": 0
          },
          {
            "atext": "Modal",
            "rightfl": 1
          },
          {
            "atext": 'Dialog Box',
            "rightfl": 0
          },
          {
            "atext": 'Tooltip',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'Which contextual class indicates a succesful or positive action?',
        answers: [
          {
            "atext": ".text-success",
            "rightfl": 1
          },
          {
            "atext": ".text-warning",
            "rightfl": 0
          },
          {
            "atext": '.text-info',
            "rightfl": 0
          },
          {
            "atext": '.text-primary',
            "rightfl": 0
          }
        ]
      },
      {
        "qtext": 'Which contextual class indicates a dangerous or potentially negative action?',
        answers: [
          {
            "atext": ".text-info",
            "rightfl": 0
          },
          {
            "atext": ".text-warning",
            "rightfl": 0
          },
          {
            "atext": '.text-primary',
            "rightfl": 0
          },
          {
            "atext": '.text-danger',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": 'Which class indicates uppercased text?',
        answers: [
          {
            "atext": ".text-capitalize",
            "rightfl": 0
          },
          {
            "atext": ".ucase",
            "rightfl": 0
          },
          {
            "atext": '.uppercase',
            "rightfl": 0
          },
          {
            "atext": '.text-uppercase',
            "rightfl": 1
          }
        ]
      },
      {
        "qtext": 'The Bootstrap grid system works across multiple devices.',
        answers: [
          {
            "atext": "True",
            "rightfl": 1
          },
          {
            "atext": "False",
            "rightfl": 0
          }
        ]
      }
    ]
  },
];

module.exports.quizzes = quizzes;


