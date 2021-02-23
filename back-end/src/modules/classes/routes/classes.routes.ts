import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ClassController from "../controllers/ClassController";

const classesRoutes = express.Router();

classesRoutes.get("/", (req, resp) => {
  const classController = new ClassController();

  classController.index(req, resp);
});

classesRoutes.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      class_name: Joi.string().required(),
      minutes: Joi.string().required(),
      completed: Joi.string().required(),
      discipline_id: Joi.string().uuid().required(),
    },
  }),
  async (req, resp) => {
    const classController = new ClassController();

    classController.create(req, resp);
  }
);

export default classesRoutes;
