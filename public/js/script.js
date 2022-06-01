import getUserName from './getUserInfFromCookie.js';
import { renderDom, renderDomUser, clearPosts } from './dom.js';

const name = document.querySelector('#name');

const userInfo = getUserName();
name.textContent = userInfo.username;

fetch('/posts')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((object) => {
      renderDom(object);
    });
  });

fetch('/user/posts')
  .then((res) => res.json())
  .then((data) => {
    clearPosts();
    data.forEach((object) => {
      renderDomUser(object);
    });
  });

fetch(`/user/profile/${userInfo.username}`)
  .then((res) => res.json())
  .then((data) => {
    clearPosts();
    data.forEach((object) => {
      renderDomUser(object);
    });
  });
