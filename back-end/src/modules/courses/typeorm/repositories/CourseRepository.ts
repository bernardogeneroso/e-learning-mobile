import { getRepository, Repository } from "typeorm";

import ICoursesRepository from "../../repositories/ICoursesRepository";
import Course from "../entity/Course";
import ICourse from "../../schemas/ICourse";
import AppError from "../../../../shared/errors/AppError";

class CourseRepository implements ICoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async findAll(): Promise<Course[] | undefined> {
    try {
      return this.ormRepository.find({
        cache: true,
      });
    } catch {
      throw new AppError("Error on get courses");
    }
  }

  public async findOneSelectImage(id: string): Promise<Course | undefined> {
    try {
      return this.ormRepository.findOne({
        cache: true,
        where: { id },
        select: ["image"],
      });
    } catch {
      throw new AppError("Error on select image of course");
    }
  }

  public async create(data: ICourse): Promise<Course> {
    try {
      const courseCreate = this.ormRepository.create(data);

      return await this.ormRepository.save(courseCreate);
    } catch {
      throw new AppError("Error on create course");
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await this.ormRepository.delete({ id });

      return;
    } catch {
      throw new AppError("Error on delete course");
    }
  }
}

export default CourseRepository;
