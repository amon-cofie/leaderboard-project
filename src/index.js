import './style.css';
import postScores from './modules/post-scores.js';
import retrieveScores from './modules/retrieve-scores.js';

const scoreBoard = document.querySelector('#scores');
const refreshBtn = document.querySelector('#refresh-recent-scores-button');
const addScoreForm = document.querySelector('#add-score-form');

const addGame = async (url = '', data = {}) => {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const response = request.json();
  return response;
};

addGame(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  { name: 'myNewGame' },
);

addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  postScores(addScoreForm);
  addScoreForm.reset();
});

refreshBtn.addEventListener('click', () => {
  retrieveScores(scoreBoard);
});
