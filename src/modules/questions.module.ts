import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/entities/questions.entity';
import { QuestionsService } from '../services/questions.service';
import { QuestionsController } from '../controllers/questions.controller';
import { Subject } from 'src/entities/subject.entity';
import { SubjectModule } from './subject.module';
import { SubjectService } from 'src/services/subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([Questions, Subject]), SubjectModule],
  controllers: [QuestionsController],
  providers: [QuestionsService, SubjectService],
})
export class QuestionsModule {}
