import { getData } from './api-handler.js';

const showSubmitNotif = (content) => {
  const div = document.createElement('div');
  div.className = 'submit-notif-sucess';
  div.innerHTML = content;
  document.body.appendChild(div);
  setTimeout(() => {
    div.classList.add('notif-animation');
  }, 1);
  setTimeout(() => {
    div.classList.remove('notif-animation');
  }, 4000);
  setTimeout(() => {
    div.remove();
  }, 4500);
};

const table = document.getElementById('scores-table');

const updateScores = () => {
  table.innerHTML = '<li>LOADING ...</li>';
  const response = getData();
  response.then((res) => {
    table.innerHTML = `${res.result.map((item) => `<li>${item.user}: ${item.score}</li>`).join('')}`;
  });
};

export { showSubmitNotif, updateScores };