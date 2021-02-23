import { getRepository, Repository } from "typeorm";

import IClassesRepository from "../../repositories/IClassesRepository";
import Class from "../entity/Class";
import IClass from "../../schemas/IClass";

class ClassRepository implements IClassesRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async findAll(): Promise<Class[] | undefined> {
    return this.ormRepository.find();
  }

  public async create(data: IClass): Promise<Class> {
    const classCreate = this.ormRepository.create(data);

    return this.ormRepository.save(classCreate);
  }
}

export default ClassRepository;
