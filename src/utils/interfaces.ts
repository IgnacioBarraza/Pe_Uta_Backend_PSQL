export interface RegisterUserDto {
  name: string;
  password: string;
  rut: string;
  user_type: string;
}

export interface LoginUserDto {
  rut: string;
  password: string;
}

export interface QuestionOption {
  value: string;
  label: string;
}

export interface CreateQuestionDto {
  label: string;
  options: QuestionOption[];
}

export interface UpdateQuestionDto {
  label?: string;
  options?: QuestionOption[];
}

export interface CreateEvaluationDto {
  userId: string;
  projectId: string;
  total_evaluation_score: number;
  question_score: QuestionScore[];
}

export interface UpdateEvaluationDto {
  userId?: string;
  projectId?: string;
  total_evaluation_score?: number;
  question_score?: QuestionScore[];
}

interface QuestionScore {
  questionId: string;
  score: number;
}

export interface CreateProjectDto {
  project_name: string;
  description: string;
  image_url: string;
  members: string[];
  subject: string;
}

export interface UpdateProjectDto {
  project_name?: string;
  description?: string;
  image_url?: string;
  members?: string[];
  subject?: string;
}

export interface CreateSubjectDto {
  subject_name: string;
  showOnExpo: boolean;
  description: string;
  subject_field: string;
}

export interface UpdateSubjectDto {
  subject_name?: string;
  showOnExpo?: boolean;
  description?: string;
  subject_field?: string;
}
