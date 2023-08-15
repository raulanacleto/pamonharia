import { Report } from '../report.interface';

export class CSVMonthlyReport implements Report {
  generate(): string {
    return 'Generating monthly sales report in CSV format...';
  }
}
