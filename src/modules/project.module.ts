import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'rxjs';
import { Project } from 'src/entities/project.entity';
import { ProjectController } from 'src/project/project.controller';
import { ProjectService } from 'src/project/project.service';
import { SubjectModule } from './subject.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Subject]), SubjectModule],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectsModule {}
