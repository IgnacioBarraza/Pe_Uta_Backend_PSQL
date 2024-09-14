import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/entities/evaluation.entity';
import { EvaluationService } from '../evaluation/evaluation.service';
import { EvaluationController } from '../evaluation/evaluation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation])],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {}
