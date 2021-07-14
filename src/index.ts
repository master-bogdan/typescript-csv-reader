import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// With static method
const matchReader = MatchReader.fromCsv('football.csv');

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

// const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summary2.buildAndPrintReport(matchReader.matches);

// With static method
const summary3 = Summary.winsAnalysisWithHtmlReport('Man United');
summary3.buildAndPrintReport(matchReader.matches);
