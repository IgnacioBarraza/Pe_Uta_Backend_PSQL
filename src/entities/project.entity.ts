import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from './subject.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  description: string;

  @Column('text', { array: true, nullable: true })
  members: string[];

  @ManyToOne(() => Subject, (subject) => subject.projects, { eager: true })
  subject: Subject;
}
