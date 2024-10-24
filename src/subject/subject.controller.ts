import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from 'src/entities/subject.entity';
import { CreateSubjectDto, UpdateSubjectDto } from 'src/utils/interfaces';

@Controller('api/subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAllSubjects(): Promise<Subject[]> {
    return this.subjectService.findAllSubjects();
  }

  @Post()
  async createSubject(
    @Body() createSubjectDto: CreateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.createSubject(createSubjectDto);
  }

  @Put(':id')
  async updateSubject(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.updateSubject(id, updateSubjectDto);
  }

  @Delete(':id')
  async deleteSubject(@Param('id') id: string): Promise<void> {
    return this.subjectService.deleteSubject(id);
  }
}
