const userRouter = require('express').Router();
const {
  handleHome, handleProfile, authorization, logOut, getAllPosts, addPosts, getUserPosts, deletePost,
} = require('../../controllers');

userRouter.use(authorization);

userRouter.get('/posts', getAllPosts);
userRouter.get('/', handleHome);
userRouter.get('/profile', handleProfile);
userRouter.get('/profile/:username', getUserPosts);
userRouter.get('/log-out', logOut);
userRouter.post('/post', addPosts);
userRouter.delete('/post/:postId', deletePost);

module.exports = { userRouter };
