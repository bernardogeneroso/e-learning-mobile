import Leasson from "../typeorm/entity/Leasson";
import ILeasson from "../schemas/ILeasson";

interface ILeassonsRepository {
  findById(course_id: string): Promise<Leasson[] | undefined>;
  create(data: ILeasson): Promise<Leasson>;
  delete(id: string): Promise<void>;
  completed(id: string): Promise<void>;
}

export default ILeassonsRepository;
