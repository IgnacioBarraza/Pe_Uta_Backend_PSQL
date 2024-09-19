import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { Project } from 'src/entities/project.entity';
import { ProjectController } from 'src/project/project.controller';
import { ProjectService } from 'src/project/project.service';
import { SubjectModule } from './subject.module';
import { SubjectService } from 'src/subject/subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Subject]), SubjectModule],
  providers: [ProjectService, SubjectService],
  controllers: [ProjectController],
})
export class ProjectsModule {}
