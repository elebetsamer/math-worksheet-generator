import { Component, OnInit } from '@angular/core';

import { MathService } from '../math/math.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lineSpacing: number;
  mathProblemsClasses = {};
  mathService: MathService;
  problemFontSize: number;
  problemsPerRow: number;

  constructor(mathService: MathService) {
    this.lineSpacing = mathService.options.lineSpacing;
    this.mathService = mathService;
    this.problemFontSize = mathService.options.problemFontSize;
    this.problemsPerRow = mathService.options.problemsPerRow;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  ngOnInit() {
    console.dir(this.mathService);
  }

  generateWorksheet() {
    this.mathService.generateProblems();
  }

  lineSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = false;
    this.lineSpacing = event.value;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
    this.mathService.options.lineSpacing = this.lineSpacing;
  }

  problemFontSizeSliderChange(event) {
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = false;
    this.problemFontSize = event.value;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
    this.mathService.options.problemFontSize = this.problemFontSize;
  }

  problemsPerRowSliderChange(event) {
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = false;
    this.problemsPerRow = event.value;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
    this.mathService.options.problemsPerRow = this.problemsPerRow;
  }

}
