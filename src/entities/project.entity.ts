import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  subject_id: string;

  @Column()
  image_url: string;

  @Column()
  description: string;

  @Column('text', { array: true, nullable: true })
  members: string[];
}
