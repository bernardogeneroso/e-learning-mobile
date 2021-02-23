import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import Class from "../../../classes/typeorm/entity/Class";

@Entity("disciplines")
export default class Discipline {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  image!: string;

  @Column()
  classes!: number;

  @OneToMany(() => Class, (classes) => classes.discipline_id)
  classesLink!: Class;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;
}
