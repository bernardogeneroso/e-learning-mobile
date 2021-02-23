import { Request, Response } from "express";

import AppError from "../../../shared/errors/AppError";
import ClassRepository from "../typeorm/repositories/ClassRepository";
import IClassesRepository from "../repositories/IClassesRepository";

class ClassController {
  private classRepository: IClassesRepository;

  constructor() {
    this.classRepository = new ClassRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const classes = await this.classRepository.findAll();

    if (!classes) throw new AppError("Error on get classes", 400);

    return response.json(classes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      class_name,
      minutes,
      completed,
      discipline_id,
    } = request.body;

    const createClass = await this.classRepository.create({
      name,
      description,
      class_name,
      minutes,
      completed,
      discipline_id,
    });

    return response.json(createClass);
  }
}

export default ClassController;
