import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { Project } from 'src/entities/project.entity';
import { CreateProjectDto, UpdateProjectDto } from 'src/utils/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAllProjects(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findProject(id: string): Promise<Project> {
    return this.projectRepository.findOneBy({ id });
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const { project_name, description, image_url, members, subject } =
      createProjectDto;

    // Fetch the subject by ID before associating it
    const subjectEntity = await this.subjectRepository.findOneBy({
      id: subject,
    });

    if (!subjectEntity) {
      throw new Error('Subject not found');
    }

    const project = this.projectRepository.create({
      project_name,
      description,
      image_url,
      members,
      subject: subjectEntity, // Use the fetched subject entity here
    });

    return await this.projectRepository.save(project);
  }

  async updateProject(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) throw new Error('Proyecto no encontrado');

    Object.assign(project, updateProjectDto);

    return this.projectRepository.save(project);
  }

  async deleteProject(id: string): Promise<void> {
    const result = await this.projectRepository.delete(id);

    if (result.affected === 0) throw new Error('Proyecto no encontrado');
  }
}
