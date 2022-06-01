import getUserName from '../getUserInfFromCookie.js';
import { renderDomUser, clearPosts } from '../dom.js';

const name = document.querySelector('#name');

const userInfo = getUserName();
name.textContent = userInfo.username;

fetch(`/user/profile/${userInfo.username}`)
  .then((res) => res.json())
  .then((data) => {
    clearPosts();
    data.forEach((object) => {
      renderDomUser(object);
    });
  });
