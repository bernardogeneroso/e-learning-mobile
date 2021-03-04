import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import AppError from "../../../shared/errors/AppError";
import LessonRepository from "../typeorm/repositories/LessonRepository";
import ILessonsRepository from "../repositories/ILessonsRepository";

class LessonController {
  private classRepository: ILessonsRepository;

  constructor() {
    this.classRepository = new LessonRepository();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { course_id } = request.params;

      const lessons = await this.classRepository.findById(course_id);
      const lesonsClassToClass = classToClass(lessons);

      if (!lesonsClassToClass) throw new AppError("Error on get lessons", 400);

      const lessonsChanged = lesonsClassToClass.map((lesson, i) => {
        const count = i + 1;

        return {
          ...lesson,
          lesson_number: count < 10 ? "0" + count : count.toString(),
        };
      });

      return response.json(lessonsChanged);
    } catch {
      throw new AppError("Error on get lessons", 400);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, minutes, course_id } = request.body;

      const createLesson = await this.classRepository.create({
        name,
        description,
        minutes,
        completed: 0,
        course_id,
      });

      return response.json(classToClass(createLesson));
    } catch {
      throw new AppError("Error on create lesson", 400);
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this.classRepository.delete(id);

      return response.send();
    } catch {
      throw new AppError("Error on delete lesson", 400);
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
      throw new AppError("Error on change lesson to completed", 400);
    }
  }
}

export default LessonController;
