import express from "express";

import classesRoutes from "../../modules/classes/routes/classes.routes";
import disciplinesRoutes from "../../modules/disciplines/routes/disciplines.routes";

const routes = express.Router();

routes.use("/classes", classesRoutes);
routes.use("/disciplines", disciplinesRoutes);

export default routes;
