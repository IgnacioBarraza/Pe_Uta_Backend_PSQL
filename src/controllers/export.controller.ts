import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import { EvaluationService } from 'src/services/evaluation.service';

@Controller('api/export')
export class ExportController {
  constructor(private evaluationService: EvaluationService) {}

  @Get('xls')
  async exportXLS(@Res() res: Response) {
    const evaluations = await this.evaluationService.findAll();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Resumen Evaluaciones Feria 2024');

    worksheet.addRow([
      'Nombre Grupo',
      'Asignatura',
      'Promedio Pregunta 1',
      'Promedio Pregunta 2',
      'Promedio Pregunta 3',
      'Promedio Pregunta 4',
      'Promedio Pregunta 5',
      'Nota Promedio',
    ]);

    evaluations.forEach((evaluation) => {
      const { project, question_scores, total_evaluation_score } = evaluation;

      worksheet.addRow([
        project.project_name,
        project.subject.subject_name,
        question_scores[0]?.score ?? 1,
        question_scores[1]?.score ?? 1,
        question_scores[2]?.score ?? 1,
        question_scores[3]?.score ?? 1,
        question_scores[4]?.score ?? 1,
        question_scores[5]?.score ?? 1,
        total_evaluation_score.toFixed(2),
      ]);
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=ResumenEvaluaciones2024.xlsx',
    );

    await workbook.xlsx.write(res);
    res.end();
  }
}
