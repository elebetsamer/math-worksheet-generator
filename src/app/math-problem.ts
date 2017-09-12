import { ProblemType } from './problem-type.enum';

export class MathProblem {
  problemType: ProblemType;
  values: number[];

  constructor(firstNumber: number, secondNumber: number, type: ProblemType) {
    this.values = new Array<number>();

    this.values.push(firstNumber);
    this.values.push(secondNumber);
    this.problemType = type;
  }

  get answer(): number {
    let total = 0;

    this.values.forEach(value => {
      switch (this.problemType) {
        case ProblemType.Addition:
          total += value;
          break;
        case ProblemType.Subtraction:
          total -= value;
          break;
      }
    });

    return total;
  }

  get symbol(): string {
    let symbol = '';

    switch (this.problemType) {
      case ProblemType.Addition:
        symbol = '+';
        break;
      case ProblemType.Subtraction:
        symbol = '-';
        break;
    }

    return symbol;
  }
}
