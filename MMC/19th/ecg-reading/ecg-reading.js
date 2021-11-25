// JavaScript Document
$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': "<img src=\"ecg-q1.png\"/><br>Where may the following rhythm originate from?",
        'options': [
          'Sinus node',
          'Atria',
          'AV junction',
          'Ventricle'
        ],
        'correctIndex': 2,
        'correctResponse': 'The rhythm is a narrow complex tachycardia, indicating that it originates above the ventricle. Given that there are no visible P waves, the rhythm is likely junctional.',
        'incorrectResponse': 'The rhythm is a narrow complex tachycardia, indicating that it originates above the ventricle. Given that there are no visible P waves, the rhythm is likely junctional.'
      },
      {
        'q': "What is almost always present in conjunction with atrial flutter?",
        'options': [
          'Fibrillation waves',
          'P waves',
          'Wide QRS complex',
          'AV block'
        ],
        'correctIndex': 3,
        'correctResponse': 'The correct answer is AV block. In typical flutter, the flutter waves are at a rate of approximately 300bpm. AV block is present such that not every flutter wave is followed by a QRS complex. This block is typically 2:1, though may be 3:1, 4:1 or variable.',
        'incorrectResponse': 'The correct answer is AV block. In typical flutter, the flutter waves are at a rate of approximately 300bpm. AV block is present such that not every flutter wave is followed by a QRS complex. This block is typically 2:1, though may be 3:1, 4:1 or variable.'
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