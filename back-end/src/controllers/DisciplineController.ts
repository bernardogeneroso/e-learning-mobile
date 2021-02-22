import { getRepository, Repository } from "typeorm";

import { Discipline } from "../database/entity/Discipline";
import IDiscipline from "../schemas/IDiscipline";
import AppError from "../errors/AppError";

class DisciplineController {
  disciplineRepository: Repository<Discipline>;

  constructor() {
    this.disciplineRepository = getRepository(Discipline);
  }

  public async index(): Promise<Discipline[]> {
    try {
      const disciplines = await this.disciplineRepository.find();

      return disciplines;
    } catch {
      throw new AppError("Error on create discipline", 400);
    }
  }

  public async create(receive: IDiscipline): Promise<Discipline> {
    const discipline = await this.disciplineRepository.create({
      name: receive.name,
      image: receive.image,
      classes: receive.classes,
    });

    try {
      await this.disciplineRepository.save(discipline);

      return discipline;
    } catch {
      throw new AppError("Error on create discipline", 400);
    }
  }
}

export default DisciplineController;
