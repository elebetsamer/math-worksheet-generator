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
  showInstructions = true;
  showNameLine = true;
  showTitle = true;
  subtractionOptions = new SubtractionOptions();
  title = 'Math Worksheet';
}
