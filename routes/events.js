import { Router } from "express";
import EventControllers from "../controllers/events";
const eventRouters = Router();

eventRouters
  .get("/events", EventControllers.allEvents)
  .post("/events", EventControllers.create)
  .get("/events/:id", EventControllers.find)
  .put("/events/:id", EventControllers.update)
  .delete("/events/:id", EventControllers.delete);

export default eventRouters;
