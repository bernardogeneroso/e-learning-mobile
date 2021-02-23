import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Discipline from "../../../disciplines/typeorm/entity/Discipline";

@Entity("classes")
export default class Class {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  class_name!: string;

  @Column()
  minutes!: number;

  @Column({ default: 0 })
  completed: number = 0;

  @Column() discipline_id!: string;

  @ManyToOne(() => Discipline)
  @JoinColumn({ name: "discipline_id" })
  discipline!: Discipline;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;
}
