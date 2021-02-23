import Discipline from "../typeorm/entity/Discipline";
import IDiscipline from "../schemas/IDiscipline";

interface IDisciplinesRepository {
  findAll(): Promise<Discipline[] | undefined>;
  create(data: IDiscipline): Promise<Discipline>;
}

export default IDisciplinesRepository;
