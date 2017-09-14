export class WorksheetOptions {
  letterSpacing = 3;
  lineSpacing = 5;
  problemCount = 25;
  problemFontSize = 2;
  problemsPerRow = 5;
  showNameLine = true;
  showTitle = true;
  title = 'Math Worksheet';
  showInstructions = true;
  instructions = 'Complete the following problems. Show all of your work.';
  showAnswers = false;
  landscape = false;
  additionOptions = new AdditionOptions();
  subtractionOptions = new SubtractionOptions();
  divisionOptions = new DivisionOptions();
  multiplicationOptions = new MultiplicationOptions();
}

export class MinimumMaximumRange {
  max: number;
  min: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
}

export class AdditionOptions {
  addendRanges: MinimumMaximumRange[] = [];
  enabled = true;

  constructor() {
    this.addendRanges.push(new MinimumMaximumRange(100, 999));
    this.addendRanges.push(new MinimumMaximumRange(1, 100));
  }

  get numberOfAddends(): number {
    return this.addendRanges.length;
  }

  addAddend() {
    this.addendRanges.push(new MinimumMaximumRange(1, 100));
  }

  removeAddend() {
    this.addendRanges.splice(this.addendRanges.length - 1, 1);
  }
}

export class SubtractionOptions {
  allowNegativeAnswers = false;
  enabled = false;
  minuendRange = new MinimumMaximumRange(100, 200);
  subtrahendRanges: MinimumMaximumRange[] = [];

  constructor() {
    this.subtrahendRanges.push(new MinimumMaximumRange(1, 100));
  }

  get numberOfSubtrahends(): number {
    return this.subtrahendRanges.length;
  }

  addSubtrahend() {
    this.subtrahendRanges.push(new MinimumMaximumRange(1, 20));
  }

  removeSubtrahend() {
    this.subtrahendRanges.splice(this.subtrahendRanges.length - 1, 1);
  }
}

export class DivisionOptions {
  decimalPlaces = 2;
  dividendRange = new MinimumMaximumRange(100, 200);
  divisorRange = new MinimumMaximumRange(1, 20);
  enabled = false;
  showDecimals = true;
  showRemainders = false;
}

export class MultiplicationOptions {
  enabled = false;
  factorRanges: MinimumMaximumRange[] = [];

  constructor() {
    this.factorRanges.push(new MinimumMaximumRange(100, 200));
    this.factorRanges.push(new MinimumMaximumRange(1, 20));
  }

  get numberOfFactors(): number {
    return this.factorRanges.length;
  }

  addFactor() {
    this.factorRanges.push(new MinimumMaximumRange(1, 20));
  }

  removeFactor() {
    this.factorRanges.splice(this.factorRanges.length - 1, 1);
  }
}
