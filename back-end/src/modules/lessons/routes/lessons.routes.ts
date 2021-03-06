import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import LessonController from "../controllers/LessonController";

const lessonsRoutes = express.Router();

lessonsRoutes.get(
  "/:course_id",
  celebrate({
    [Segments.PARAMS]: {
      course_id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const lessonRoutes = new LessonController();

    lessonRoutes.index(req, resp);
  }
);

lessonsRoutes.post(
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
    const lessonRoutes = new LessonController();

    lessonRoutes.create(req, resp);
  }
);

lessonsRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const lessonRoutes = new LessonController();

    lessonRoutes.remove(req, resp);
  }
);

lessonsRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  (req, resp) => {
    const lessonRoutes = new LessonController();

    lessonRoutes.completed(req, resp);
  }
);

export default lessonsRoutes;
