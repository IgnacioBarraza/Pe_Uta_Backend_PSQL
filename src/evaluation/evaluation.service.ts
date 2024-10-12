import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Evaluation } from 'src/entities/evaluation.entity';
import { Project } from 'src/entities/project.entity';
import { User } from 'src/entities/user.entity';
import { CreateEvaluationDto } from 'src/utils/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Evaluation[]> {
    return this.evaluationRepository.find();
  }

  async findByUser(userId: string): Promise<Evaluation[]> {
    return this.evaluationRepository.find({
      where: { user: { id: userId } },
    });
  }

  async createEvaluation(
    createEvaluation: CreateEvaluationDto,
  ): Promise<Evaluation> {
    const { user, project } = createEvaluation;

    // Check if the user exists
    const existingUser = await this.userRepository.findOne({
      where: { id: user.id },
    });
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${user.id} not found`);
    }

    // Check if the project exists
    const existingProject = await this.projectRepository.findOne({
      where: { id: project.id },
    });
    if (!existingProject) {
      throw new NotFoundException(`Project with ID ${project.id} not found`);
    }

    // Check if the user has already evaluated THIS project
    const existingEvaluation = await this.evaluationRepository.findOne({
      where: {
        user: { id: user.id },
        project: { id: project.id },
      },
      relations: ['user', 'project'],
    });
    if (existingEvaluation) {
      throw new ConflictException(
        `El usuario ya evaluó este proyecto, evaluación no completada.`,
      );
    }

    // Create and save the new evaluation
    const evaluation = this.evaluationRepository.create({
      ...createEvaluation,
      user: existingUser,
      project: existingProject,
    });

    return this.evaluationRepository.save(evaluation);
  }
}
