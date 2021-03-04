import { getRepository, Repository } from "typeorm";

import ILessonsRepository from "../../repositories/ILessonsRepository";
import Lesson from "../entity/Lesson";
import ILesson from "../../schemas/ILesson";
import AppError from "../../../../shared/errors/AppError";

class LessonRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async findById(course_id: string): Promise<Lesson[] | undefined> {
    try {
      return this.ormRepository.find({
        cache: true,
        where: { course_id },
        order: {
          created_at: "ASC",
        },
      });
    } catch {
      throw new AppError("Error on get lessons");
    }
  }

  public async create(data: ILesson): Promise<Lesson> {
    try {
      const classCreate = this.ormRepository.create(data);

      await this.ormRepository.save(classCreate).catch((err) => {
        throw new AppError(err);
      });

      return classCreate;
    } catch (error) {
      throw new AppError("Error on create lesson");
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await this.ormRepository.delete({ id });

      return;
    } catch {
      throw new AppError("Error on delete lesson");
    }
  }

  public async completed(id: string): Promise<void> {
    try {
      await this.ormRepository
        .createQueryBuilder()
        .update(Lesson)
        .set({
          completed: 1,
        })
        .where("id = :id", { id })
        .execute();

      return;
    } catch {
      throw new AppError("Error on change lesson to completed");
    }
  }
}

export default LessonRepository;
