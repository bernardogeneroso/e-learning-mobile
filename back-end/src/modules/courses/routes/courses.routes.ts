import express from "express";
import path from "path";
import multer from "multer";
import { celebrate, Segments, Joi } from "celebrate";

import CourseController from "../controllers/CourseController";
import uploadConfig from "../../../config/multer";

const coursesRoutes = express.Router();

const upload = multer(uploadConfig.multerStorageImageCourses);

coursesRoutes.get("/", async (req, resp) => {
  const courseController = new CourseController();

  courseController.index(req, resp);
});

coursesRoutes.post(
  "/",
  upload.single("image"),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      leassons: Joi.string().required(),
    },
  }),
  async (req, resp) => {
    const courseController = new CourseController();

    courseController.create(req, resp);
  }
);

coursesRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, resp) => {
    const courseController = new CourseController();

    courseController.remove(req, resp);
  }
);

coursesRoutes.use(
  "/image",
  express.static(path.resolve(uploadConfig.uploadsFolder, "courses"))
);

export default coursesRoutes;
