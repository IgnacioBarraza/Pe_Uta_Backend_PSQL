import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/entities/evaluation.entity';
import { EvaluationService } from '../evaluation/evaluation.service';
import { EvaluationController } from '../evaluation/evaluation.controller';
import { User } from 'src/entities/user.entity';
import { Project } from 'src/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, User, Project])],
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {}
