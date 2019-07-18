import { Router } from 'express';

import User from '../../controllers/users';
import authenticate from '../../middlewares/authenticate';

const userRouters = Router();

userRouters
  .get('/users', authenticate, User.allUsers)
  .post('/users', User.create)
  .get('/users/:id', authenticate, User.find)
  .post('/login', User.login);

export default userRouters;
