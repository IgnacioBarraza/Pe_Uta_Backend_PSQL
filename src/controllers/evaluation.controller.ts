import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EvaluationService } from '../services/evaluation.service';
import { Evaluation } from 'src/entities/evaluation.entity';
import { CreateEvaluationDto } from 'src/utils/interfaces';

@Controller('api/evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  async findAll(): Promise<Evaluation[]> {
    return this.evaluationService.findAll();
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string): Promise<Evaluation[]> {
    return this.evaluationService.findByUser(userId);
  }

  @Post()
  async createEvaluation(
    @Body() createEvaluation: CreateEvaluationDto,
  ): Promise<Evaluation> {
    return this.evaluationService.createEvaluation(createEvaluation);
  }
}
