import { ReportFactory } from './report-factory.interface';
import { Report } from '../products/report.interface';
import { PDFMonthlyReport } from '../products/pdf-reports/pdf-monthly-report';
import { PDFYearlyReport } from '../products/pdf-reports/pdf-yearly-report';

export class PDFReportFactory implements ReportFactory {
  createMonthlyReport(): Report {
    return new PDFMonthlyReport();
  }

  createYearlyReport(): Report {
    return new PDFYearlyReport();
  }
}
