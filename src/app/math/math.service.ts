import { Injectable } from '@angular/core';

import { MathProblem } from './math-problem';
import { ProblemType } from './problem-type.enum';
import {
  AdditionOptions,
  DivisionOptions,
  MinimumMaximumRange,
  MultiplicationOptions,
  SubtractionOptions,
  WorksheetOptions
} from '../options';

@Injectable()
export class MathService {
  options: WorksheetOptions;
  problems: MathProblem[];

  constructor() {
    this.options = new WorksheetOptions();
    this.problems = new Array<MathProblem>();
  }

  generateProblems() {
    const availableProblemTypes: ProblemType[] = [];

    this.problems = [];

    if (this.options.additionOptions.enabled) {
      availableProblemTypes.push(ProblemType.Addition);
    }

    if (this.options.divisionOptions.enabled) {
      availableProblemTypes.push(ProblemType.Division);
    }

    if (this.options.multiplicationOptions.enabled) {
      availableProblemTypes.push(ProblemType.Multiplication);
    }

    if (this.options.subtractionOptions.enabled) {
      availableProblemTypes.push(ProblemType.Subtraction);
    }

    for (let i = 0; i < this.options.problemCount; i++) {
      const problemType = availableProblemTypes[this.getRandomNumber(0, availableProblemTypes.length - 1)];

      switch (problemType) {
        case ProblemType.Addition:
          this.problems.push(this.getAdditionProblem(this.options.additionOptions));
          break;
        case ProblemType.Division:
          this.problems.push(this.getDivisionProblem(this.options.divisionOptions));
          break;
        case ProblemType.Multiplication:
          this.problems.push(this.getMultiplicationProblem(this.options.multiplicationOptions));
          break;
        case ProblemType.Subtraction:
          const problem = this.getSubtractionProblem(this.options.subtractionOptions);

          if (this.options.subtractionOptions.allowNegativeAnswers) {
            this.problems.push(problem);
          } else {
            if (problem.answer >= 0) {
              this.problems.push(problem);
            } else {
              i--; // it was a negative answer, so we don't want to add it, reset the loop counter
            }
          }

          break;
      }
    }
  }

  private getAdditionProblem(options: AdditionOptions) {
    const topAddend = this.getRandomNumberFromRange(options.addendRanges[0]);
    const bottomAddend = this.getRandomNumberFromRange(options.addendRanges[1]);
    const problem = new MathProblem(topAddend, bottomAddend, ProblemType.Addition);

    if (options.addendRanges.length > 2) {
      problem.clearValues();

      options.addendRanges.forEach(addendRange => {
        problem.addValue(this.getRandomNumber(addendRange.min, addendRange.max));
      });
    }

    return problem;
  }

  private getDivisionProblem(options: DivisionOptions) {
    const dividend = this.getRandomNumberFromRange(options.dividendRange);
    const divisor = this.getRandomNumberFromRange(options.divisorRange);
    const problem = new MathProblem(dividend, divisor, ProblemType.Division);

    return problem;
  }

  private getMultiplicationProblem(options: MultiplicationOptions) {
    const topFactor = this.getRandomNumberFromRange(options.factorRanges[0]);
    const bottomFactor = this.getRandomNumberFromRange(options.factorRanges[1]);
    const problem = new MathProblem(topFactor, bottomFactor, ProblemType.Multiplication);

    if (options.factorRanges.length > 2) {
      problem.clearValues();

      options.factorRanges.forEach(factorRange => {
        problem.addValue(this.getRandomNumber(factorRange.min, factorRange.max));
      });
    }

    return problem;
  }

  private getSubtractionProblem(options: SubtractionOptions) {
    const minuend = this.getRandomNumberFromRange(options.minuendRange);
    const subtrahend = this.getRandomNumberFromRange(options.subtrahendRanges[0]);
    const problem = new MathProblem(minuend, subtrahend, ProblemType.Subtraction);

    if (options.subtrahendRanges.length > 1) {
      problem.clearValues();

      problem.addValue(minuend);

      options.subtrahendRanges.forEach(subtrahendRange => {
        problem.addValue(this.getRandomNumber(subtrahendRange.min, subtrahendRange.max));
      });
    }

    return problem;
  }

  private getRandomNumberFromRange(range: MinimumMaximumRange) {
    return this.getRandomNumber(range.min, range.max);
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
