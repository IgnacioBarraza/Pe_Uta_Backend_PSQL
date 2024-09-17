import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../entities/subject.entity';
import { Repository } from 'typeorm';
import { CreateSubjectDto, UpdateSubjectDto } from 'src/utils/interfaces';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAllSubjects(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const { subject_name, showOnExpo = true } = createSubjectDto;
    const subject = this.subjectRepository.create({ subject_name, showOnExpo });

    return await this.subjectRepository.save(subject);
  }

  async updateSubject(
    id: string,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const subject = await this.subjectRepository.findOneBy({ id });
    if (!subject) throw new Error('Asignatura no encontrada');

    Object.assign(subject, updateSubjectDto);

    return this.subjectRepository.save(subject);
  }

  async deleteSubject(id: string): Promise<void> {
    const result = await this.subjectRepository.delete(id);
    if (result.affected === 0) throw new Error('Asignatura no encontrada');
  }
}
