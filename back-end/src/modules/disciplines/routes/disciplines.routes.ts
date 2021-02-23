import express from "express";
import path from "path";
import multer from "multer";
import { celebrate, Segments, Joi } from "celebrate";

import DisciplineController from "../controllers/DisciplineController";
import uploadConfig from "../../../config/multer";

const disciplinesRoutes = express.Router();

const upload = multer(uploadConfig.multerStorageImageDisciplines);

disciplinesRoutes.get("/", async (req, resp) => {
  const disciplineController = new DisciplineController();

  disciplineController.index(req, resp);
});

disciplinesRoutes.post(
  "/create",
  upload.single("image"),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      classes: Joi.string().required(),
    },
  }),
  async (req, resp) => {
    const disciplineController = new DisciplineController();

    disciplineController.create(req, resp);
  }
);

disciplinesRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, resp) => {
    const disciplineController = new DisciplineController();

    disciplineController.remove(req, resp);
  }
);

disciplinesRoutes.use(
  "/image",
  express.static(path.resolve(uploadConfig.uploadsFolder, "disciplines"))
);

export default disciplinesRoutes;
