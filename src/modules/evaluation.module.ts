import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/entities/evaluation.entity';
import { EvaluationService } from '../services/evaluation.service';
import { EvaluationController } from '../controllers/evaluation.controller';
import { User } from 'src/entities/user.entity';
import { Project } from 'src/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, User, Project])],
  controllers: [EvaluationController],
  providers: [EvaluationService],
  exports: [EvaluationService],
})
export class EvaluationModule {}
