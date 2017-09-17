import { AdditionOptions } from './addition-options';
import { DivisionOptions } from './division-options';
import { MultiplicationOptions } from './multiplication-options';
import { SubtractionOptions } from './subtraction-options';

export class WorksheetOptions {
  additionOptions = new AdditionOptions();
  divisionOptions = new DivisionOptions();
  instructions = 'Complete the following problems. Show all of your work.';
  landscape = false;
  letterSpacing = 3;
  lineSpacing = 5;
  multiplicationOptions = new MultiplicationOptions();
  problemCount = 25;
  problemFontSize = 2;
  problemsPerRow = 5;
  showAnswers = false;
  showDateLine = true;
  showInstructions = true;
  showNameLine = true;
  showTitle = true;
  subtractionOptions = new SubtractionOptions();
  title = 'Math Worksheet';

  updateFromJson(jsonObject: WorksheetOptions) {
    this.additionOptions.updateFromJson(jsonObject.additionOptions);
    this.divisionOptions.updateFromJson(jsonObject.divisionOptions);
    this.instructions = 'Complete the following problems. Show all of your work.';
    this.landscape = jsonObject.landscape;
    this.letterSpacing = jsonObject.letterSpacing;
    this.lineSpacing = jsonObject.lineSpacing;
    this.problemCount = jsonObject.problemCount;
    this.problemFontSize = jsonObject.problemFontSize;
    this.problemsPerRow = jsonObject.problemsPerRow;
    this.showAnswers = jsonObject.showAnswers;
    this.showDateLine = jsonObject.showDateLine;
    this.showInstructions = jsonObject.showInstructions;
    this.showNameLine = jsonObject.showNameLine;
    this.showTitle = jsonObject.showTitle;
    this.title = jsonObject.title;
    this.multiplicationOptions.updateFromJson(jsonObject.multiplicationOptions);
    this.subtractionOptions.updateFromJson(jsonObject.subtractionOptions);
  }
}
