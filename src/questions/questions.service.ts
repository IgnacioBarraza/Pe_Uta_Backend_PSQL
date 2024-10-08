import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from '../entities/questions.entity';
import { CreateQuestionDto } from '../utils/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Questions>,
  ) {}

  async findAll(): Promise<Questions[]> {
    return this.questionRepository.find();
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Questions> {
    const question = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(question);
  }

  async deleteQuestion(id: string): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
