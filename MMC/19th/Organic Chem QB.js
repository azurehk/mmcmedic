// JavaScript Document
$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': "&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"organic-1.png\"/><br>&nbsp;&nbsp;&nbsp;&nbsp;請命名此有機化學物",
        'options': [
          '按此查看答案'],
        'correctIndex': 0,
        'correctResponse': '2,3-dimethylpentane',
        'incorrectResponse': 'Custom incorrect response.'
      },
      {
        'q': "&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"ia-q1.jpg\"/><br>&nbsp;&nbsp;&nbsp;&nbsp;請命名此有機化學物",
        'options': [
          'Answer 1',
          'Answer 2'
        ],
        'correctIndex': 1,
        'correctResponse': 'Custom correct response.',
        'incorrectResponse': 'Custom incorrect response.'
      },
      {
        'q': 'A smaple question?',
        'options': [
          'Answer 1',
          'Answer 2',
          'Answer 3',
          'Answer 4'
        ],
        'correctIndex': 2,
        'correctResponse': 'Custom correct response.',
        'incorrectResponse': 'Custom incorrect response.'
      },
      {
        'q': 'A smaple question?',
        'options': [
          'Answer 1',
          'Answer 2'
        ],
        'correctIndex': 1,
        'correctResponse': 'Custom correct response.',
        'incorrectResponse': 'Custom incorrect response.'
      },
      {
        'q': 'A smaple question?',
        'options': [
          'Answer 1',
          'Answer 2',
          'Answer 3',
          'Answer 4'
        ],
        'correctIndex': 3,
        'correctResponse': 'Custom correct response.',
        'incorrectResponse': 'Custom incorrect response.'
      }
    ]
  }
	 );