/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz

  questions: [
    {
      text: 'Why orange is the national colour of the Netherlands?',
      answers: {
        a: 'it is the color of the sunset over the North sea',
        b: 'it is the color of Royal Dutch line, the house of Orange',
        c: 'it is the favorite color of the Queen',
      },
      correct: 'b',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'Which claim about Dutch is true?',
      answers: {
        a: 'the Dutch are the tallest nation in Europe',
        b: 'the Dutch have the biggest amount of dogs per one person in the world',
        c: 'the Dutch are the happiest people according to EU statistics ',
      },
      correct: 'a',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'What is jenever?',
      answers: {
        a: 'it is a traditional meal made of haring',
        b: 'it is a kind of winter sport in North Holland',
        c: 'it is a strong alcohol drink',
        d: 'it is the name of an annual festival in Amsterdam',
      },
      correct: 'c',
      selected: null,
      isAnswerCorrect: null,
    },
    {
      text: 'In which Dutch city was the European Union formed?',
      answers: {
        a: 'of course Amsterdam',
        b: 'Den Haag',
        c: 'Maastricht',
      },
      correct: 'c',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'What animals are treated in the hospital of Pietersburen (province of Groningen)?',
      answers: {
        a: 'dolphins',
        b: 'cows and sheep',
        c: 'seals',
        d: 'hamsters',
      },
      correct: 'c',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'What is the national motto of the Netherlands? It was also written on the coins before the Euro currency.',
      answers: {
        a: 'We will survive',
        b: 'We will conquer',
        c: 'We will party',
        d: 'We will maintain',
      },
      correct: 'd',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'Which city serves as the sit of the Dutch government?',
      answers: {
        a: 'Amsterdam',
        b: 'Den Haag',
        c: 'Rotterdam',
      },
      correct: 'b',
      selected: null,

      isAnswerCorrect: null,
    },
    {
      text: 'What for the windmills were initially created?',
      answers: {
        a: 'to grind grain and make flour',
        b: 'to make air circulate better',
        c: 'to scare the crows on the fields',
        d: 'to pomp water and prevent floods',
      },
      correct: 'd',
      selected: null,

      isAnswerCorrect: null,
    },

    {
      text: 'What are "hune - bedden"?',

      answers: {
        a: 'these are the ancestors of Dutch people living here in the 13th century',
        b: 'these are massive stones, in the South and East of the country',
        c: 'this is a traditional Dutch skate tournaments',
      },
      correct: 'b',
      selected: null,

      isAnswerCorrect: null,
    },

    {
      text: 'Which world-wide company was founded in the city of Eindhoven?',
      answers: {
        a: "McDonald's",
        b: 'Philips',
        c: 'Caterpillar',
        d: 'Volkswagen',
      },
      correct: 'b',
      selected: null,

      isAnswerCorrect: null,
    },
    // Add more questions here
  ],
};
