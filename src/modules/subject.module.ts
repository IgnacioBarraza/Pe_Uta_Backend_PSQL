import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '../entities/subject.entity';
import { SubjectService } from '../services/subject.service';
import { SubjectController } from '../controllers/subject.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  providers: [SubjectService],
  controllers: [SubjectController],
  exports: [SubjectService],
})
export class SubjectModule {}
