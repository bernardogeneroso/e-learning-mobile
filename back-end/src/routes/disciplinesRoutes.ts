import express from "express";

import DisciplineController from "../controllers/DisciplineController";

const disciplinesRoutes = express.Router();

disciplinesRoutes.get("/", async (request, response) => {
  const disciplineController = new DisciplineController();

  const receiveDisciplines = await disciplineController.index();

  response.status(200).send(receiveDisciplines);
});

export default disciplinesRoutes;
