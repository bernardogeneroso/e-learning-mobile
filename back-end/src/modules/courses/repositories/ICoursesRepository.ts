import Course from "../typeorm/entity/Course";
import ICourse from "../schemas/ICourse";

interface ICoursesRepository {
  findAll(): Promise<Course[] | undefined>;
  findOneSelectImage(id: string): Promise<Course | undefined>;
  create(data: ICourse): Promise<Course>;
  delete(id: string): Promise<void>;
}

export default ICoursesRepository;
