import { ReportFactory } from './report-factory.interface';
import { Report } from '../products/report.interface';
import { CSVMonthlyReport } from '../products/csv-reports/csv-monthly-report';
import { CSVYearlyReport } from '../products/csv-reports/csv-yearly-report';

export class CSVReportFactory implements ReportFactory {
  public createMonthlyReport(): Report {
    return new CSVMonthlyReport();
  }

  public createYearlyReport(): Report {
    return new CSVYearlyReport();
  }
}
