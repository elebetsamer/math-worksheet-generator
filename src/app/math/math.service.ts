import { Injectable } from '@angular/core';

import { MathProblem } from '../math-problem';
import { ProblemType } from '../problem-type.enum';
import { WorksheetOptions } from '../worksheet-options';

@Injectable()
export class MathService {
  options: WorksheetOptions;
  problems: MathProblem[];

  constructor() {
    this.options = new WorksheetOptions();
    this.problems = new Array<MathProblem>();
  }

  generateProblems() {
    this.problems = [];

    for (let i = this.problems.length; i < this.options.problemCount; i++) {
      const topValue = this.getRandomNumber(this.options.topValueMinMax.min, this.options.topValueMinMax.max);
      const bottomValue = this.getRandomNumber(this.options.bottomValueMinMax.min, this.options.bottomValueMinMax.max);

      this.problems.push(new MathProblem(topValue, bottomValue, ProblemType.Addition));
    }
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
