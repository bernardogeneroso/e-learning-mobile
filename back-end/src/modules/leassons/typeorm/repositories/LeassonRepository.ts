import { getRepository, Repository } from "typeorm";

import ILeassonsRepository from "../../repositories/ILeassonsRepository";
import Leasson from "../entity/Leasson";
import ILeasson from "../../schemas/ILeasson";
import AppError from "../../../../shared/errors/AppError";

class LeassonRepository implements ILeassonsRepository {
  private ormRepository: Repository<Leasson>;

  constructor() {
    this.ormRepository = getRepository(Leasson);
  }

  public async findById(course_id: string): Promise<Leasson[] | undefined> {
    try {
      return this.ormRepository.find({
        cache: true,
        where: { course_id },
        order: {
          created_at: "ASC",
        },
      });
    } catch {
      throw new AppError("Error on get leassons");
    }
  }

  public async create(data: ILeasson): Promise<Leasson> {
    try {
      const classCreate = this.ormRepository.create(data);

      await this.ormRepository.save(classCreate).catch((err) => {
        throw new AppError(err);
      });

      return classCreate;
    } catch (error) {
      throw new AppError("Error on create leasson");
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await this.ormRepository.delete({ id });

      return;
    } catch {
      throw new AppError("Error on delete leasson");
    }
  }

  public async completed(id: string): Promise<void> {
    try {
      await this.ormRepository
        .createQueryBuilder()
        .update(Leasson)
        .set({
          completed: 1,
        })
        .where("id = :id", { id })
        .execute();

      return;
    } catch {
      throw new AppError("Error on change leasson to completed");
    }
  }
}

export default LeassonRepository;
