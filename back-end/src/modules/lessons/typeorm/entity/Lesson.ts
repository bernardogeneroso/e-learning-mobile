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

import Course from "../../../courses/typeorm/entity/Course";

@Entity("lessons")
export default class Leasson {
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

  @Column() course_id!: string;

  @ManyToOne(() => Course)
  @JoinColumn({ name: "course_id" })
  course!: Course;

  @CreateDateColumn() created_at!: Date;

  @UpdateDateColumn() updated_at!: Date;

  @Expose({ name: "completed" })
  getComplete(): number | boolean | null {
    if (this.completed === null) {
      return null;
    }

    return this.completed === 1 ? true : false;
  }
}
