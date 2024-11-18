import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Questions } from 'src/entities/questions.entity';
import { CreateQuestionDto } from 'src/utils/interfaces';
import { QuestionsService } from '../services/questions.service';

@Controller('api/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(): Promise<Questions[]> {
    return this.questionsService.findAll();
  }

  @Post()
  async create(
    @Body() createQuestionsDto: CreateQuestionDto,
  ): Promise<Questions> {
    return this.questionsService.createQuestion(createQuestionsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.questionsService.deleteQuestion(id);
  }
}
