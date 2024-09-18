import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './subject.entity';
import { Evaluation } from './evaluation.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  project_name: string;

  @Column()
  image_url: string;

  @Column()
  description: string;

  @Column('text', { array: true, nullable: true })
  members: string[];

  @ManyToOne(() => Subject, (subject) => subject.projects, { eager: true })
  subject: Subject;

  @OneToMany(() => Evaluation, (evaluation) => evaluation.project)
  evaluations: Evaluation[];
}
