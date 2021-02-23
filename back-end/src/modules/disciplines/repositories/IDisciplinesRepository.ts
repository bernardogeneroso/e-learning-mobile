import Discipline from "../typeorm/entity/Discipline";
import IDiscipline from "../schemas/IDiscipline";

interface IDisciplinesRepository {
  findAll(): Promise<Discipline[] | undefined>;
  findOneSelectImage(id: string): Promise<Discipline | undefined>;
  create(data: IDiscipline): Promise<Discipline>;
  delete(id: string): Promise<void>;
}

export default IDisciplinesRepository;
