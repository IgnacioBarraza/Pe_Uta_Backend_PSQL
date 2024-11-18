import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/entities/questions.entity';
import { QuestionsService } from '../services/questions.service';
import { QuestionsController } from '../controllers/questions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
