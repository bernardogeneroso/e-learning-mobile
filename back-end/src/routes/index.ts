import express from "express";

import classesRoutes from "./classesRoutes";
import disciplinesRoutes from "./disciplinesRoutes";

const routes = express.Router();

routes.use("/classes", classesRoutes);
routes.use("/disciplines", disciplinesRoutes);

export default routes;
