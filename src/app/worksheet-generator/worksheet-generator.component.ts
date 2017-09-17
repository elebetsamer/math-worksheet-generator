import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AnalyticsService } from '../analytics/analytics.service';
import { AuthService } from '../auth/auth.service';
import { MathProblem } from '../worksheet/math-problem';
import { WorksheetService } from '../worksheet/worksheet.service';
import { ProblemType } from '../worksheet/problem-type.enum';

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
  worksheetService: WorksheetService;

  private isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    worksheetService: WorksheetService,
    private analytics: AnalyticsService,
    public authService: AuthService
  ) {
    this.worksheetService = worksheetService;
    this.initialize();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.worksheetService.getById(id).subscribe(worksheetService => {
          this.worksheetService.id = id;
          this.worksheetService.updateFromJson(worksheetService);
          this.initialize();
        });
      }
    });

    this.authService.user.subscribe(user => {
      // console.log(`authService.user.subscribe`, user);

      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  generateWorksheet() {
    this.analytics.trackEventWithCategory('worksheet', 'generate');

    this.worksheetService.clearProblems();

    this.worksheetService.generateProblems();

    if (!this.isLoggedIn) {
      this.authService.loginAnonymous();
    }
  }

  getDivisionNumberFormat() {
    if (this.worksheetService.options.divisionOptions.showDecimals) {
      return `1.0-${this.worksheetService.options.divisionOptions.decimalPlaces}`;
    }

    return `1.0-0`;
  }

  isDivisionProblem(problem: MathProblem) {
    return problem.problemType === ProblemType.Division;
  }

  letterSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = false;
    this.letterSpacing = this.worksheetService.options.letterSpacing = event.value;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
  }

  lineSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = false;
    this.lineSpacing = this.worksheetService.options.lineSpacing = event.value;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  numberOfAddendsSliderChange(event) {
    if (this.numberOfAddends > event.value) {
      this.worksheetService.options.additionOptions.removeAddend();
    }

    if (this.numberOfAddends < event.value) {
      this.worksheetService.options.additionOptions.addAddend();
    }

    this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
  }

  numberOfDecimalsSliderChange(event) {
    this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces = event.value;
  }

  numberOfFactorsSliderChange(event) {
    if (this.numberOfFactors > event.value) {
      this.worksheetService.options.multiplicationOptions.removeFactor();
    }

    if (this.numberOfFactors < event.value) {
      this.worksheetService.options.multiplicationOptions.addFactor();
    }

    this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
  }

  numberOfSubtrahendsSliderChange(event) {
    if (this.numberOfSubtrahends > event.value) {
      this.worksheetService.options.subtractionOptions.removeSubtrahend();
    }

    if (this.numberOfSubtrahends < event.value) {
      this.worksheetService.options.subtractionOptions.addSubtrahend();
    }

    this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
  }

  print() {
    this.analytics.trackEventWithCategory('worksheet', 'print');

    window.print();
  }

  problemFontSizeSliderChange(event) {
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = false;
    this.problemFontSize = this.worksheetService.options.problemFontSize = event.value;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
  }

  problemsPerRowSliderChange(event) {
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = false;
    this.problemsPerRow = this.worksheetService.options.problemsPerRow = event.value;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
  }

  save() {
    this.analytics.trackEventWithCategory('worksheet', 'save');

    this.worksheetService.save();
  }

  showDecimalsChange(event) {
    if (event.checked) {
      this.worksheetService.options.divisionOptions.showRemainders = false;
    }
  }

  showRemaindersChange(event) {
    if (event.checked) {
      this.worksheetService.options.divisionOptions.showDecimals = false;
    }
  }

  private initialize() {
    this.letterSpacing = this.worksheetService.options.letterSpacing;
    this.lineSpacing = this.worksheetService.options.lineSpacing;
    this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
    this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces;
    this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
    this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
    this.problemFontSize = this.worksheetService.options.problemFontSize;
    this.problemsPerRow = this.worksheetService.options.problemsPerRow;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }
}
