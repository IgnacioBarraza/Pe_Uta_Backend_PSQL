import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column('jsonb')
  options: { value: string; label: string }[];
}
