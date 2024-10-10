import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Project } from './project.entity';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.evaluations, {
    eager: true,
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Project, (project) => project.evaluations, {
    eager: true,
    onDelete: 'CASCADE',
  })
  project: Project;

  @Column('float')
  total_evaluation_score: number;

  @Column('jsonb')
  question_scores: { id: string; score: number }[];

  @Column('text', { nullable: true }) // New comment attribute
  comment: string;
}
