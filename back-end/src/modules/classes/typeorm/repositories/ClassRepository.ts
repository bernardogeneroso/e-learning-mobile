import { getRepository, Repository } from "typeorm";

import IClassesRepository from "../../repositories/IClassesRepository";
import Class from "../entity/Class";
import IClass from "../../schemas/IClass";

class ClassRepository implements IClassesRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async findById(discipline_id: string): Promise<Class[] | undefined> {
    return this.ormRepository.find({
      cache: true,
      where: { discipline_id },
      order: {
        created_at: "ASC",
      },
    });
  }

  public async create(data: IClass): Promise<Class> {
    const classCreate = this.ormRepository.create(data);

    return this.ormRepository.save(classCreate);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({ id });

    return;
  }

  public async completed(id: string): Promise<void> {
    await this.ormRepository
      .createQueryBuilder()
      .update(Class)
      .set({
        completed: 1,
      })
      .where("id = :id", { id })
      .execute();

    return;
  }
}

export default ClassRepository;
