import { Report } from '../products/report.interface';

export interface ReportFactory {
  createMonthlyReport(): Report;
  createYearlyReport(): Report;
}
