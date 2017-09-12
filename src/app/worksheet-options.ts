export class WorksheetOptions {
  lineSpacing = 3;
  problemCount = 25;
  problemFontSize = 2;
  problemsPerRow = 5;
  bottomValueMinMax: MinimumMaximumRange = new MinimumMaximumRange(1, 100);
  topValueMinMax: MinimumMaximumRange = new MinimumMaximumRange(100, 999);
  showNameLine = true;
  showTitle = true;
  title = 'Math Worksheet';
  showInstructions = true;
  instructions = 'Complete the following problems. Show all of your work.';
  showAnswers = false;
  landscape = false;
}

export class MinimumMaximumRange {
  max: number;
  min: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
}
