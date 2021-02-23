import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ClassController from "../controllers/ClassController";

const classesRoutes = express.Router();

classesRoutes.get(
  "/:discipline_id",
  celebrate({
    [Segments.PARAMS]: {
      discipline_id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const classController = new ClassController();

    classController.index(req, resp);
  }
);

classesRoutes.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      minutes: Joi.required(),
      discipline_id: Joi.string().uuid().required(),
    },
  }),
  async (req, resp) => {
    const classController = new ClassController();

    classController.create(req, resp);
  }
);

classesRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const classController = new ClassController();

    classController.remove(req, resp);
  }
);

classesRoutes.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const classController = new ClassController();

    classController.completed(req, resp);
  }
);

export default classesRoutes;
