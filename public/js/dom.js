import deletePost from './deletePost.js';

const posts = document.querySelector('.container');
const renderDom = ((obj) => {
  const post = document.createElement('div');
  post.className = 'post';
  const headerPost = document.createElement('div');
  headerPost.className = 'headerCard';

  const upVoteImg = document.createElement('img');
  upVoteImg.setAttribute('src', '../assets/up-vote.webp');
  upVoteImg.setAttribute('width', '30px');
  upVoteImg.className = 'up-vote';

  const voteSpan = document.createElement('span');
  voteSpan.textContent = '1';
  voteSpan.className = 'span-vote';

  const downVoteImg = document.createElement('img');
  downVoteImg.setAttribute('src', '../assets/down-vote.png');
  downVoteImg.setAttribute('width', '30px');
  downVoteImg.className = 'down-vote';

  headerPost.appendChild(upVoteImg);
  headerPost.appendChild(voteSpan);
  headerPost.appendChild(downVoteImg);

  const bodyPost = document.createElement('div');
  bodyPost.className = 'bodyCard';

  const userInfo = document.createElement('div');
  const userImg = document.createElement('img');
  userImg.setAttribute('src', '../assets/user-img.png');
  userImg.setAttribute('width', '30px');
  userImg.className = 'user-img';

  const userName = document.createElement('a');
  userName.setAttribute('href', '/posts');
  userName.className = 'user-name';
  userName.textContent = obj.username;

  const postInfo = document.createElement('div');
  const titlePost = document.createElement('h3');
  titlePost.className = 'caption';
  titlePost.textContent = obj.title;
  const description = document.createElement('p');
  description.className = 'caption';
  description.textContent = obj.description;

  if (userName === obj.username) {
    const remove = document.createElement('button');
    remove.className = 'caption';
    remove.textContent = 'delete';
    postInfo.append(remove);
    remove.addEventListener('click', () => {
      console.log('userName');
      console.log(obj);
      deletePost(obj.id);
    });
  }

  bodyPost.append(userInfo);
  bodyPost.append(postInfo);

  userInfo.append(userImg);
  userInfo.append(userName);

  postInfo.append(titlePost);
  postInfo.append(description);

  post.append(headerPost, bodyPost);
  posts.append(post);
});

const clearPosts = () => {
  posts.textContent = '';
};

const renderDomUser = ((obj) => {
  const post = document.createElement('div');
  post.className = 'post';
  const headerPost = document.createElement('div');
  headerPost.className = 'headerCard';

  const upVoteImg = document.createElement('img');
  upVoteImg.setAttribute('src', '../assets/up-vote.webp');
  upVoteImg.setAttribute('width', '30px');
  upVoteImg.className = 'up-vote';

  const voteSpan = document.createElement('span');
  voteSpan.textContent = '1';
  voteSpan.className = 'span-vote';

  const downVoteImg = document.createElement('img');
  downVoteImg.setAttribute('src', '../assets/down-vote.png');
  downVoteImg.setAttribute('width', '30px');
  downVoteImg.className = 'down-vote';

  headerPost.appendChild(upVoteImg);
  headerPost.appendChild(voteSpan);
  headerPost.appendChild(downVoteImg);

  const bodyPost = document.createElement('div');
  bodyPost.className = 'bodyCard';

  const userInfo = document.createElement('div');
  const userImg = document.createElement('img');
  userImg.setAttribute('src', '../assets/user-img.png');
  userImg.setAttribute('width', '30px');
  userImg.className = 'user-img';

  const userName = document.createElement('a');
  userName.setAttribute('href', '/posts');
  userName.className = 'user-name';
  userName.textContent = obj.username;

  const postInfo = document.createElement('div');
  const titlePost = document.createElement('h3');
  titlePost.className = 'caption';
  titlePost.textContent = obj.title;
  const description = document.createElement('p');
  description.className = 'caption';
  description.textContent = obj.description;
  const remove = document.createElement('button');
  remove.className = 'caption';
  remove.textContent = 'delete';
  remove.addEventListener('click', () => {
    deletePost(obj.id);
  });

  bodyPost.append(userInfo);
  bodyPost.append(postInfo);

  userInfo.append(userImg);
  userInfo.append(userName);

  postInfo.append(titlePost);
  postInfo.append(description);
  postInfo.append(remove);

  post.append(headerPost, bodyPost);
  posts.append(post);
});

export { renderDom, renderDomUser, clearPosts };
