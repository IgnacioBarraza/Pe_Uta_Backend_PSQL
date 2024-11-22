import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from '../entities/questions.entity';
import { CreateQuestionDto } from '../utils/interfaces';
import { Repository } from 'typeorm';
import { SubjectService } from './subject.service';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Questions>,
    private subjectService: SubjectService,
  ) {}

  async findAll(): Promise<Questions[]> {
    return this.questionRepository.find();
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Questions> {
    const { associatedTo, options, ...rest } = createQuestionDto;
    const subjects = [];

    for (const subjectId of associatedTo) {
      const subject = await this.subjectService.findSubject(subjectId);
      if (!subject)
        throw new NotFoundException(`Subject with ID ${subjectId} not found`);

      subjects.push(subject);
    }

    const processedOptions = options.map((option) => ({
      ...option,
      value: Number(option.value),
    }));

    const question = this.questionRepository.create({
      ...rest,
      options: processedOptions,
      associatedTo: subjects,
    });
    return this.questionRepository.save(question);
  }

  async deleteQuestion(id: string): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
