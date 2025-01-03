import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { Project } from 'src/entities/project.entity';
import { CreateProjectDto, UpdateProjectDto } from 'src/utils/interfaces';

@Controller('api/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAllProjects(): Promise<Project[]> {
    return this.projectService.findAllProjects();
  }

  @Get(':id')
  async findProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.findProject(id);
  }

  @Post()
  async createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return this.projectService.updateProject(id, updateProjectDto);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}
