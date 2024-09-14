import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { ProjectController } from 'src/project/project.controller';
import { ProjectService } from 'src/project/project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectsModule {}
