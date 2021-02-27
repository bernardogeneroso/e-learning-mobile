import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import LeassonController from "../controllers/LeassonController";
import AppError from "../../../shared/errors/AppError";

const leassonsRoutes = express.Router();

leassonsRoutes.get(
  "/:course_id",
  celebrate({
    [Segments.PARAMS]: {
      course_id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const leassonRoutes = new LeassonController();

    leassonRoutes.index(req, resp);
  }
);

leassonsRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      minutes: Joi.required(),
      course_id: Joi.string().uuid().required(),
    },
  }),
  async (req, resp) => {
    const leassonRoutes = new LeassonController();

    leassonRoutes.create(req, resp);
  }
);

leassonsRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const leassonRoutes = new LeassonController();

    leassonRoutes.remove(req, resp);
  }
);

leassonsRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const leassonRoutes = new LeassonController();

    leassonRoutes.completed(req, resp);
  }
);

export default leassonsRoutes;
