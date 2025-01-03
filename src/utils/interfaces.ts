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
  value: number;
  label: string;
}

export interface CreateQuestionDto {
  label: string;
  options: QuestionOption[];
  ponderation: number;
  associatedTo: string[];
}

export interface UpdateQuestionDto {
  label?: string;
  options?: QuestionOption[];
}

export interface CreateEvaluationDto {
  user: { id: string }; // Assuming you just need the user ID
  project: { id: string }; // Assuming you just need the project ID
  total_evaluation_score: number; // Add this if needed
  question_scores: { questionId: string; score: number }[]; // Assuming this is how you structure it
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
