import { Router } from "express";
import PostControllers from "../../controllers/posts";
import passport from "passport";
const postRouters = Router();

postRouters
  .get("/posts", PostControllers.allPosts)
  .post(
    "/posts",
    passport.authenticate("jwt", { session: false }),
    PostControllers.create
  )
  .get("/posts/:id", PostControllers.find)
  .put(
    "/posts/:id",
    passport.authenticate("jwt", { session: false }),
    PostControllers.update
  )
  .delete(
    "/posts/:id",
    passport.authenticate("jwt", { session: false }),
    PostControllers.delete
  );

export default postRouters;
