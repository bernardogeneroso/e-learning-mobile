import Lesson from "../typeorm/entity/Lesson";
import ILesson from "../schemas/ILesson";

interface ILessonsRepository {
  findById(course_id: string): Promise<Lesson[] | undefined>;
  create(data: ILesson): Promise<Lesson>;
  delete(id: string): Promise<void>;
  completed(id: string): Promise<void>;
}

export default ILessonsRepository;
