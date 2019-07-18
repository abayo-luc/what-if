import { Router } from 'express';
import PostControllers from '../../controllers/posts';
import passport from 'passport';
import authenticate from '../../middlewares/authenticate';
const postRouters = Router();

postRouters
  .get('/posts', PostControllers.allPosts)
  .post('/posts', authenticate, PostControllers.create)
  .get('/posts/:slug', PostControllers.find)
  .put('/posts/:slug', authenticate, PostControllers.update)
  .delete('/posts/:id', authenticate, PostControllers.delete);

export default postRouters;
