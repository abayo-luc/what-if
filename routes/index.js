import { Router } from "express";

import postRouters from "./posts";
import eventRouters from "./events";

const routers = Router();

routers.use(postRouters, eventRouters);

export default routers;
