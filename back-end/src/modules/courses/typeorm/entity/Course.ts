import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Expose } from "class-transformer";

import Lessons from "../../../lessons/typeorm/entity/Lesson";

@Entity("courses")
export default class Course {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  image!: string;

  @Column()
  lessons!: number;

  @OneToMany(() => Lessons, (lessons) => lessons.course_id)
  lessonsLink!: Lessons;

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
