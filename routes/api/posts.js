import { Router } from "express";
import PostControllers from "../../controllers/posts";
const postRouters = Router();

postRouters
  .get("/posts", PostControllers.allPosts)
  .post("/posts", PostControllers.create)
  .get("/posts/:id", PostControllers.find)
  .put("/posts/:id", PostControllers.update)
  .delete("/posts/:id", PostControllers.delete);

export default postRouters;
