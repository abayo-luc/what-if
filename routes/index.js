import { Router } from "express";
import postRouters from "./api/posts";
import eventRouters from "./api/events";
import userRouters from "./api/users";
const routers = Router();

routers.use(postRouters, eventRouters, userRouters);

export default routers;
