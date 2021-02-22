import express from "express";

const classesRouter = express.Router();

classesRouter.get("/", (request, response) => {
  response.status(200).send();
});

export default classesRouter;
