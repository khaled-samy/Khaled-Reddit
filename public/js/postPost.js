import postData from './postData.js';
import { renderDomUser } from './dom.js';
import getUserName from './getUserInfFromCookie.js';

const userInfo = getUserName();

const modal = document.querySelector('.post-container');
const btn = document.querySelector('#open');
const span = document.querySelector('.close');

modal.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, description } = e.target;

  postData({ title: title.value.trim(), description: description.value.trim(), userId: userInfo.id }, '/user/post')
    .then(() => location.reload())
    .then((obj) => renderDomUser(obj[0]))
    .catch((err) => console.log(err));
});

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});
