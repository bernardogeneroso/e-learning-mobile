import Class from "../typeorm/entity/Class";
import IClass from "../schemas/IClass";

interface IClassesRepository {
  findAll(): Promise<Class[] | undefined>;
  create(data: IClass): Promise<Class>;
}

export default IClassesRepository;
