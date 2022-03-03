import { getData } from './api-handler.js';

const showSubmitNotif = (content) => {
  const div = document.createElement('div');
  div.className = 'submit-notif-sucess';
  div.innerHTML = content;
  document.body.appendChild(div);
  setTimeout(() => {
    div.classList.add('notif-animation');
  }, 5);
  setTimeout(() => {
    div.classList.remove('notif-animation');
  }, 4000);
  setTimeout(() => {
    div.remove();
  }, 4500);
};

const table = document.getElementById('scores-table');
const sortScores = (data) => {
  let temp;
  for (let i = 0; i < data.length; i += 1) {
    for (let j = i + 1; j < data.length; j += 1) {
      if (+data[j].score > +data[i].score) {
        temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  return data;
};

const updateScores = () => {
  table.innerHTML = '<li>LOADING ...</li>';
  const response = getData();
  response.then((res) => {
    table.innerHTML = `${sortScores(res.result).map((item) => `<li class="scores"><span>${item.user}</span><span>${item.score}</span></li>`).join('')}`;
  });
};

export { showSubmitNotif, updateScores };