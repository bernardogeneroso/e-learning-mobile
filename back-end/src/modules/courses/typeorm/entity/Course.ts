import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Expose } from "class-transformer";

import Leasson from "../../../leassons/typeorm/entity/Leasson";

@Entity("courses")
export default class Course {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  image!: string;

  @Column()
  leassons!: number;

  @OneToMany(() => Leasson, (leassons) => leassons.course_id)
  leassonsLink!: Leasson;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;

  @Expose({ name: "image_url" })
  getImage_url(): string | null {
    if (!this.image) {
      return null;
    }

    return `${process.env.APP_API_URL}/courses/image/${this.image}`;
  }
}
