import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../analytics/analytics.service';
import { MathProblem } from '../math/math-problem';
import { MathService } from '../math/math.service';
import { ProblemType } from '../math/problem-type.enum';

declare let window: any;

@Component({
  selector: 'app-worksheet-generator',
  templateUrl: './worksheet-generator.component.html',
  styleUrls: ['./worksheet-generator.component.scss']
})
export class WorksheetGeneratorComponent implements OnInit {
  letterSpacing: number;
  lineSpacing: number;
  mathProblemsClasses = {};
  numberOfAddends: number;
  numberOfDecimals: number;
  numberOfFactors: number;
  numberOfSubtrahends: number;
  problemFontSize: number;
  problemsPerRow: number;

  constructor(public mathService: MathService, public analytics: AnalyticsService) {
    this.letterSpacing = this.mathService.options.letterSpacing;
    this.lineSpacing = this.mathService.options.lineSpacing;
    this.numberOfAddends = this.mathService.options.additionOptions.numberOfAddends;
    this.numberOfDecimals = this.mathService.options.divisionOptions.decimalPlaces;
    this.numberOfFactors = this.mathService.options.multiplicationOptions.numberOfFactors;
    this.numberOfSubtrahends = this.mathService.options.subtractionOptions.numberOfSubtrahends;
    this.problemFontSize = this.mathService.options.problemFontSize;
    this.problemsPerRow = this.mathService.options.problemsPerRow;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  ngOnInit() {
    console.dir(this.mathService);
  }

  generateWorksheet() {
    this.analytics.trackEventWithCategory('worksheet', 'generate');

    this.mathService.clearProblems();

    this.mathService.generateProblems();

    console.log(JSON.stringify(this.mathService));
  }

  getDivisionNumberFormat() {
    if (this.mathService.options.divisionOptions.showDecimals) {
      return `1.0-${this.mathService.options.divisionOptions.decimalPlaces}`;
    }

    return `1.0-0`;
  }

  isDivisionProblem(problem: MathProblem) {
    return problem.problemType === ProblemType.Division;
  }

  letterSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = false;
    this.letterSpacing = this.mathService.options.letterSpacing = event.value;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
  }

  lineSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = false;
    this.lineSpacing = this.mathService.options.lineSpacing = event.value;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  print() {
    this.analytics.trackEventWithCategory('worksheet', 'print');

    window.print();
  }

  numberOfAddendsSliderChange(event) {
    if (this.numberOfAddends > event.value) {
      this.mathService.options.additionOptions.removeAddend();
    }

    if (this.numberOfAddends < event.value) {
      this.mathService.options.additionOptions.addAddend();
    }

    this.numberOfAddends = this.mathService.options.additionOptions.numberOfAddends;
  }

  numberOfDecimalsSliderChange(event) {
    this.numberOfDecimals = this.mathService.options.divisionOptions.decimalPlaces = event.value;
  }

  numberOfFactorsSliderChange(event) {
    if (this.numberOfFactors > event.value) {
      this.mathService.options.multiplicationOptions.removeFactor();
    }

    if (this.numberOfFactors < event.value) {
      this.mathService.options.multiplicationOptions.addFactor();
    }

    this.numberOfFactors = this.mathService.options.multiplicationOptions.numberOfFactors;
  }

  numberOfSubtrahendsSliderChange(event) {
    if (this.numberOfSubtrahends > event.value) {
      this.mathService.options.subtractionOptions.removeSubtrahend();
    }

    if (this.numberOfSubtrahends < event.value) {
      this.mathService.options.subtractionOptions.addSubtrahend();
    }

    this.numberOfSubtrahends = this.mathService.options.subtractionOptions.numberOfSubtrahends;
  }

  problemFontSizeSliderChange(event) {
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = false;
    this.problemFontSize = this.mathService.options.problemFontSize = event.value;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
  }

  problemsPerRowSliderChange(event) {
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = false;
    this.problemsPerRow = this.mathService.options.problemsPerRow = event.value;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
  }

  showDecimalsChange(event) {
    if (event.checked) {
      this.mathService.options.divisionOptions.showRemainders = false;
    }
  }

  showRemaindersChange(event) {
    if (event.checked) {
      this.mathService.options.divisionOptions.showDecimals = false;
    }
  }
}
