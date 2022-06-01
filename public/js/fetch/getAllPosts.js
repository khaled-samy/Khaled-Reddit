import { renderDom } from '../dom.js';

fetch('/posts')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((object) => {
      renderDom(object);
    });
  });
