import { getRepository, Repository } from "typeorm";

import IDisciplinesRepository from "../../repositories/IDisciplinesRepository";
import Discipline from "../../typeorm/entity/Discipline";
import IDiscipline from "../../schemas/IDiscipline";

class DisciplineRepository implements IDisciplinesRepository {
  private ormRepository: Repository<Discipline>;

  constructor() {
    this.ormRepository = getRepository(Discipline);
  }

  public async findAll(): Promise<Discipline[] | undefined> {
    return this.ormRepository.find();
  }

  public async create(data: IDiscipline): Promise<Discipline> {
    const disciplineCreate = this.ormRepository.create(data);

    return this.ormRepository.save(disciplineCreate);
  }
}

export default DisciplineRepository;
