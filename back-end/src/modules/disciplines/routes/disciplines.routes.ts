import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import DisciplineController from "../controllers/DisciplineController";

const disciplinesRoutes = express.Router();

disciplinesRoutes.get("/", async (req, resp) => {
  const disciplineController = new DisciplineController();

  disciplineController.index(req, resp);
});

disciplinesRoutes.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      image: Joi.string().required(),
      classes: Joi.string().required(),
    },
  }),
  async (req, resp) => {
    const disciplineController = new DisciplineController();

    disciplineController.create(req, resp);
  }
);

export default disciplinesRoutes;
