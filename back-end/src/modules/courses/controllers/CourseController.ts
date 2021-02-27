import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import path from "path";
import fs from "fs";
import { promisify } from "util";

import ICoursesRepository from "../repositories/ICoursesRepository";
import CourseRepository from "../typeorm/repositories/CourseRepository";
import AppError from "../../../shared/errors/AppError";
import uploadConfig from "../../../config/multer";

class CourseController {
  private courseRepository: ICoursesRepository;

  constructor() {
    this.courseRepository = new CourseRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const courses = await this.courseRepository.findAll();

      if (!courses) throw new AppError("Error on get courses", 400);

      return response.json(classToClass(courses));
    } catch {
      throw new AppError("Error on get course");
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, leassons } = request.body;

    try {
      const createCourse = await this.courseRepository.create({
        name,
        image: request.file.filename,
        leassons,
      });

      return response.json(classToClass(createCourse));
    } catch {
      throw new AppError("Error on create course");
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const courseOnlyImage = await this.courseRepository.findOneSelectImage(
        id
      );

      if (!courseOnlyImage) throw new AppError("Error on delete course");

      const filePath = path.resolve(
        uploadConfig.uploadsFolder,
        "leassons",
        courseOnlyImage.image
      );

      const unlinkAsyncCourseImage = promisify(fs.unlink);
      await unlinkAsyncCourseImage(filePath);

      await this.courseRepository.delete(id);

      return response.send();
    } catch {
      throw new AppError("Error on delete course");
    }
  }
}

export default CourseController;
