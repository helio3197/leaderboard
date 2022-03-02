import './style.css';
import scores from './scores.js';

const table = document.getElementById('scores-table');

table.innerHTML = `${scores.map((item) => `<li>${item.name}: ${item.score}</li>`).join('')}`;