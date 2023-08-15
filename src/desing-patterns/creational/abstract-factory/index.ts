import { ReportFactory } from './factories/abstract-report-factory.interface';
import { PDFReportFactory } from './factories/pdf-report-factory';
import { CSVReportFactory } from './factories/csv-report-factory';
import { Report } from './products/report.interface';

function clientCode(factory: ReportFactory): void {
  const monthlyReport: Report = factory.createMonthlyReport();
  const yearlyReport: Report = factory.createYearlyReport();

  console.log(monthlyReport.generate());
  console.log(yearlyReport.generate());
}

console.log('Client: Testing client code with PDF report factory...');
clientCode(new PDFReportFactory());

console.log('----');

console.log('Client: Testing client code with CSV report factory...');
clientCode(new CSVReportFactory());
