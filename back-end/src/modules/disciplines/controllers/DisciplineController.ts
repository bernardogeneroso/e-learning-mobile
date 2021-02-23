import { Request, Response } from "express";

import IDisciplinesRepository from "../repositories/IDisciplinesRepository";
import DisciplineRepository from "../typeorm/repositories/DisciplineRepository";
import AppError from "../../../shared/errors/AppError";

class DisciplineController {
  private disciplineRepository: IDisciplinesRepository;

  constructor() {
    this.disciplineRepository = new DisciplineRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const disciplines = await this.disciplineRepository.findAll();

    if (!disciplines) throw new AppError("Error on get disciplines", 400);

    return response.json(disciplines);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image, classes } = request.body;

    const createDiscipline = await this.disciplineRepository.create({
      name,
      image,
      classes,
    });

    return response.json(createDiscipline);
  }
}

export default DisciplineController;
