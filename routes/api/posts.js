import { Router } from 'express';
import PostControllers from '../../controllers/posts';
import passport from 'passport';
const postRouters = Router();

postRouters
  .get('/posts', PostControllers.allPosts)
  .post(
    '/posts',
    passport.authenticate('jwt', { session: false }),
    PostControllers.create
  )
  .get('/posts/:slug', PostControllers.find)
  .put(
    '/posts/:slug',
    passport.authenticate('jwt', { session: false }),
    PostControllers.update
  )
  .delete(
    '/posts/:slug',
    passport.authenticate('jwt', { session: false }),
    PostControllers.delete
  );

export default postRouters;
