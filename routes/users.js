import { Router } from "express";
import User from "../controllers/users";
const userRouters = Router();

userRouters
  .get("/users", User.allUsers)
  .post("/users", User.create)
  .get("/users/:id", User.find);

export default userRouters;
