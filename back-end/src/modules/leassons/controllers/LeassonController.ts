import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import AppError from "../../../shared/errors/AppError";
import LeassonRepository from "../typeorm/repositories/LeassonRepository";
import ILeassonsRepository from "../repositories/ILeassonsRepository";

class LeassonController {
  private classRepository: ILeassonsRepository;

  constructor() {
    this.classRepository = new LeassonRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { course_id } = request.params;

      const leassons = await this.classRepository.findById(course_id);
      const leasonsClassToClass = classToClass(leassons);

      if (!leasonsClassToClass)
        throw new AppError("Error on get leassons", 400);

      const leassonsChanged = leasonsClassToClass.map((leasson, i) => {
        const count = i + 1;

        return {
          ...leasson,
          leasson_number: count < 10 ? "0" + count : count.toString(),
        };
      });

      return response.json(leassonsChanged);
    } catch {
      throw new AppError("Error on get leassons", 400);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, minutes, course_id } = request.body;

      const createLeasson = await this.classRepository.create({
        name,
        description,
        minutes,
        completed: 0,
        course_id,
      });

      return response.json(classToClass(createLeasson));
    } catch {
      throw new AppError("Error on create leasson", 400);
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this.classRepository.delete(id);

      return response.send();
    } catch {
      throw new AppError("Error on delete leasson", 400);
    }
  }

  public async completed(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.params;

      await this.classRepository.completed(id);

      return response.send();
    } catch {
      throw new AppError("Error on change leasson to completed", 400);
    }
  }
}

export default LeassonController;
