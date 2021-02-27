import express from "express";

import leassonsRoutes from "../../modules/leassons/routes/leassons.routes";
import coursesRoutes from "../../modules/courses/routes/courses.routes";

const routes = express.Router();

routes.use("/leassons", leassonsRoutes);
routes.use("/courses", coursesRoutes);

export default routes;
