import Class from "../typeorm/entity/Class";
import IClass from "../schemas/IClass";

interface IClassesRepository {
  findById(discipline_id: string): Promise<Class[] | undefined>;
  create(data: IClass): Promise<Class>;
  delete(id: string): Promise<void>;
  completed(id: string): Promise<void>;
}

export default IClassesRepository;
