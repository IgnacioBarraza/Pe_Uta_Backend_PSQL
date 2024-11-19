import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import { EvaluationService } from 'src/services/evaluation.service';

@Controller('api/export')
export class ExportController {
  constructor(private evaluationService: EvaluationService) {}

  @Get('xls')
  async exportXLS(@Res() res: Response) {
    try {
      const evaluations = await this.evaluationService.findAll();

      // Agrupar evaluaciones por nombre de grupo
      const groupedEvaluations = evaluations.reduce(
        (acc, evaluation) => {
          const groupName = evaluation.project.project_name;
          if (!acc[groupName]) {
            acc[groupName] = [];
          }
          acc[groupName].push(evaluation);
          return acc;
        },
        {} as Record<string, any[]>,
      );

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(
        'Resumen Evaluaciones Feria 2024',
      );

      // Determinar la cantidad máxima de preguntas
      const maxQuestions = Math.max(
        ...evaluations.map((evaluation) => evaluation.question_scores.length),
      );

      // Encabezados
      const headers = [
        'Nombre Grupo',
        'Asignatura',
        ...Array.from(
          { length: maxQuestions },
          (_, i) => `Promedio Pregunta ${i + 1}`,
        ),
        'Nota Promedio',
      ];
      const headerRow = worksheet.addRow(headers);
      headerRow.font = { bold: true };

      // Calcular promedios por grupo
      for (const [groupName, groupEvaluations] of Object.entries(
        groupedEvaluations,
      )) {
        // Obtener asignatura (asumiendo que todas las evaluaciones tienen la misma asignatura)
        const subjectName = groupEvaluations[0].project.subject.subject_name;

        // Inicializar acumuladores para las preguntas y notas totales
        const questionSums = Array(maxQuestions).fill(0);
        let totalScoreSum = 0;

        // Procesar evaluaciones del grupo
        groupEvaluations.forEach((evaluation) => {
          evaluation.question_scores.forEach((question, index) => {
            questionSums[index] += question.score;
          });
          totalScoreSum += evaluation.total_evaluation_score;
        });

        // Calcular promedios
        const questionAverages = questionSums.map(
          (sum) => (sum / groupEvaluations.length).toFixed(2) || '1.00',
        );
        const averageTotalScore = (
          totalScoreSum / groupEvaluations.length
        ).toFixed(2);

        // Agregar fila con los promedios
        worksheet.addRow([
          groupName,
          subjectName,
          ...questionAverages,
          averageTotalScore,
        ]);
      }

      // Configuración de respuesta HTTP
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
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al generar el archivo Excel.');
    }
  }
}
