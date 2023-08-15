import { Report } from '../report.interface';

export class CSVYearlyReport implements Report {
  generate(): string {
    return 'Generating Yearly sales report in CSV format...';
  }
}
