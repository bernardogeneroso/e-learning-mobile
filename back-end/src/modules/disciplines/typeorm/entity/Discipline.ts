import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Expose } from "class-transformer";

import Class from "../../../classes/typeorm/entity/Class";

@Entity("disciplines")
export default class Discipline {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  image!: string;

  @Column()
  classes!: number;

  @OneToMany(() => Class, (classes) => classes.discipline_id)
  classesLink!: Class;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;

  @Expose({ name: "image_url" })
  getImage_url(): string | null {
    if (!this.image) {
      return null;
    }

    return `${process.env.APP_API_URL}/disciplines/image/${this.image}`;
  }
}
