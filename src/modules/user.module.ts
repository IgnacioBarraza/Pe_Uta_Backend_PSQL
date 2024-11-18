import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { EvaluationService } from 'src/services/evaluation.service';
import { Evaluation } from 'src/entities/evaluation.entity';
import { EvaluationModule } from './evaluation.module';
import { ProjectsModule } from './project.module';
import { Project } from 'src/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Evaluation, Project]),
    EvaluationModule,
    ProjectsModule,
  ],
  providers: [UserService, EvaluationService],
  controllers: [UserController],
})
export class UsersModule {}
