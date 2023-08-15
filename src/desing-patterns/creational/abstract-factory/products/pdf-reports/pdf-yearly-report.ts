import { Report } from '../report.interface';

export class PDFYearlyReport implements Report {
  generate(): string {
    return 'Generating Yearly sales report in PDF format...';
  }
}
