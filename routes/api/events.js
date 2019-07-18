import { Router } from 'express';
import EventControllers from '../../controllers/events';
import authenticate from '../../middlewares/authenticate';
const eventRouters = Router();

eventRouters
  .get('/events', EventControllers.allEvents)
  .post('/events', authenticate, EventControllers.create)
  .get('/events/:id', EventControllers.find)
  .put('/events/:id', authenticate, EventControllers.update)
  .delete('/events/:id', authenticate, EventControllers.delete);

export default eventRouters;
