import { Router } from "express";
import passport from "passport";
import User from "../../controllers/users";
const userRouters = Router();

userRouters
  .get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    User.allUsers
  )
  .post("/users", User.create)
  .get(
    "/users/:id",
    passport.authenticate("jwt", { session: false }),
    User.find
  )
  .post("/login", User.login);

export default userRouters;
