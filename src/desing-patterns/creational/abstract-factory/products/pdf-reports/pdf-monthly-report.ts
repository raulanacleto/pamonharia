import { Report } from '../report.interface';

export class PDFMonthlyReport implements Report {
  generate(): string {
    return 'Generating monthly sales report in PDF format...';
  }
}
