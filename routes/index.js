import { Router } from "express";

import postRouters from "./posts";
import eventRouters from "./events";
import userRouters from "./users";
const routers = Router();

routers.use(postRouters, eventRouters, userRouters);

export default routers;
