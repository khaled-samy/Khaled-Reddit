const deletePost = (id) => {
  fetch(`/user/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => location.reload())
    .catch((err) => console.log(err));
};

export default deletePost;
