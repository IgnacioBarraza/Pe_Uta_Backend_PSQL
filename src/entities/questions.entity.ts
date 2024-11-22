import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Subject } from './subject.entity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column('jsonb')
  options: { value: number; label: string }[];

  @Column('decimal', { precision: 5, scale: 2 })
  ponderation: number;

  @ManyToMany(() => Subject, (subject) => subject.questions)
  @JoinTable({
    name: 'subject_questions',
    joinColumn: {
      name: 'question_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
  })
  associatedTo: Subject[];
}
