import './style.css';
import { sendData } from './api-handler.js';
import { showSubmitNotif, updateScores } from './utils.js';

const refresBtn = document.getElementById('refresh-button');
const scoresForm = document.getElementById('add-scores');

scoresForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name: { value: name }, score: { value: score } } = e.currentTarget.elements;
  const result = sendData(name, score);
  result.then((res) => {
    showSubmitNotif(res.result);
    updateScores();
  });
  e.currentTarget.name.value = '';
  e.currentTarget.score.value = '';
});

refresBtn.addEventListener('click', updateScores);

updateScores();
