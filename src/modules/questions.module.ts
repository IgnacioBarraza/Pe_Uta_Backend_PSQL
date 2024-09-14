import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/entities/questions.entity';
import { QuestionsService } from '../questions/questions.service';
import { QuestionsController } from '../questions/questions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
