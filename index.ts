#!/usr/bin/env node

import inquirer from 'inquirer';

type Question = {
  question: string;
  choices: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Paris', 'New York'],
    answer: 'Paris',
  },
  {
    question: 'What is the currency of Japan?',
    choices: ['Dollar', 'Euro', 'Yen'],
    answer: 'Yen',
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['Venus', 'Jupiter', 'Mars'],
    answer: 'Jupiter',
  },
  {
    question: 'What is the smallest country in the world by land area?',
    choices: ['Monaco', 'Vatican City', 'San Marino'],
    answer: 'Vatican City',
  },
];

let score = 0;

async function runQuiz() {
  for (let i = 0; i < questions.length; i++) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'answer',
        message: questions[i].question,
        choices: questions[i].choices,
      },
    ]);

    if (answer.answer === questions[i].answer) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`Sorry, the correct answer is ${questions[i].answer}`);
    }
  }

  console.log(`Your score is ${score} out of ${questions.length}`);
}

runQuiz();
