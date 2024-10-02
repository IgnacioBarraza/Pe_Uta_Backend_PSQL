import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject_name: string;

  @Column()
  showOnExpo: boolean;

  @Column()
  description: string;

  @Column()
  subject_field: string;

  @OneToMany(() => Project, (project) => project.subject)
  projects: Project[];
}
