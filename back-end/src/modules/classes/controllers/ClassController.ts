import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import AppError from "../../../shared/errors/AppError";
import ClassRepository from "../typeorm/repositories/ClassRepository";
import IClassesRepository from "../repositories/IClassesRepository";

class ClassController {
  private classRepository: IClassesRepository;

  constructor() {
    this.classRepository = new ClassRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { discipline_id } = request.params;

    try {
      const classes = await this.classRepository.findById(discipline_id);

      if (!classes) throw new AppError("Error on get classes", 400);

      return response.json(classToClass(classes));
    } catch {
      throw new AppError("Error on get classes", 400);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, minutes, discipline_id } = request.body;

    try {
      const createClass = await this.classRepository.create({
        name,
        description,
        minutes,
        completed: 0,
        discipline_id,
      });

      return response.json(classToClass(createClass));
    } catch {
      throw new AppError("Error on create classes", 400);
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.classRepository.delete(id);

      return response.send();
    } catch {
      throw new AppError("Error on delete class", 400);
    }
  }

  public async completed(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      await this.classRepository.completed(id);

      return response.send();
    } catch {
      throw new AppError("Error on change class to completed", 400);
    }
  }
}

export default ClassController;
