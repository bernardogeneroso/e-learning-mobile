import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import path from "path";
import fs from "fs";
import { promisify } from "util";

import IDisciplinesRepository from "../repositories/IDisciplinesRepository";
import DisciplineRepository from "../typeorm/repositories/DisciplineRepository";
import AppError from "../../../shared/errors/AppError";
import uploadConfig from "../../../config/multer";

class DisciplineController {
  private disciplineRepository: IDisciplinesRepository;

  constructor() {
    this.disciplineRepository = new DisciplineRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const disciplines = await this.disciplineRepository.findAll();

      if (!disciplines) throw new AppError("Error on get disciplines", 400);

      return response.json(classToClass(disciplines));
    } catch {
      throw new AppError("Error on get discipline");
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, classes } = request.body;

    try {
      const createDiscipline = await this.disciplineRepository.create({
        name,
        image: request.file.filename,
        classes,
      });

      return response.json(classToClass(createDiscipline));
    } catch {
      throw new AppError("Error on create discipline");
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const disciplineOnlyImage = await this.disciplineRepository.findOneSelectImage(
        id
      );

      if (!disciplineOnlyImage)
        throw new AppError("Error on delete discipline");

      const filePath = path.resolve(
        uploadConfig.uploadsFolder,
        "disciplines",
        disciplineOnlyImage.image
      );

      const unlinkAsyncDisciplineImage = promisify(fs.unlink);
      await unlinkAsyncDisciplineImage(filePath);

      await this.disciplineRepository.delete(id);

      return response.send();
    } catch {
      throw new AppError("Error on delete discipline");
    }
  }
}

export default DisciplineController;
