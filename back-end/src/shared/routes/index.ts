import express from "express";

import lessonsRoutes from "../../modules/lessons/routes/lessons.routes";
import coursesRoutes from "../../modules/courses/routes/courses.routes";

const routes = express.Router();

routes.use("/lessons", lessonsRoutes);
routes.use("/courses", coursesRoutes);

export default routes;
