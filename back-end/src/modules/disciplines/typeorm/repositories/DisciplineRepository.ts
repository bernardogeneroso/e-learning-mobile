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
    return this.ormRepository.find({
      cache: true,
    });
  }

  public async findOneSelectImage(id: string): Promise<Discipline | undefined> {
    return this.ormRepository.findOne({
      cache: true,
      where: { id },
      select: ["image"],
    });
  }

  public async create(data: IDiscipline): Promise<Discipline> {
    const disciplineCreate = this.ormRepository.create(data);

    return this.ormRepository.save(disciplineCreate);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({ id });

    return;
  }
}

export default DisciplineRepository;
