import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Expose, Exclude } from "class-transformer";

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
  minutes!: number;

  @Exclude()
  @Column({ default: 0 })
  completed: number = 0;

  @Column() discipline_id!: string;

  @ManyToOne(() => Discipline)
  @JoinColumn({ name: "discipline_id" })
  discipline!: Discipline;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;

  @Expose({ name: "completed" })
  getImage_url(): number | boolean | null {
    if (this.completed === null) {
      return null;
    }

    return this.completed === 1 ? true : false;
  }
}
