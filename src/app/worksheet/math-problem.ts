import { ProblemType } from './problem-type.enum';

export class MathProblem {
  problemType: ProblemType;
  values: number[] = [];

  constructor(firstNumber: number, secondNumber: number, type: ProblemType) {
    this.values.push(firstNumber);
    this.values.push(secondNumber);
    this.problemType = type;
  }

  get answer(): number {
    let total = 0; // Start with zero so the looping has a starting value

    // For division problems, we don't need to do the loop
    if (this.problemType === ProblemType.Division) {
      return this.values[0] / this.values[1];
    }

    // The starting point for multiplication should be 1
    // That way in the loop, the first iteration will be 1 * the first value
    if (this.problemType === ProblemType.Multiplication) {
      total = 1;
    }

    // In order for the loop to start at the right place, we just double the first value
    // That way for the first loop, we start with the correct value
    // Ex: If the first value was 15, the starting value would be 30,
    // then the first loop would be 30-15=15 which is our actual starting value for the subtraction
    if (this.problemType === ProblemType.Subtraction) {
      total = this.values[0] * 2;
    }

    this.values.forEach(value => {
      switch (this.problemType) {
        case ProblemType.Addition:
          total += value;
          break;
        case ProblemType.Multiplication:
          total *= value;
          break;
        case ProblemType.Subtraction:
          total -= value;
          break;
      }
    });

    return total;
  }

  get answerFloored(): number {
    return Math.floor(this.answer);
  }

  get remainder(): number {
    if (this.problemType === ProblemType.Division) {
      return this.values[0] % this.values[1];
    }

    return 0;
  }

  get symbol(): string {
    let symbol = '';

    switch (this.problemType) {
      case ProblemType.Addition:
        symbol = '+';
        break;
      case ProblemType.Division:
        symbol = '÷';
        break;
      case ProblemType.Multiplication:
        symbol = 'x';
        break;
      case ProblemType.Subtraction:
        symbol = '-';
        break;
    }

    return symbol;
  }

  addValue(value: number) {
    this.values.push(value);
  }

  clearValues() {
    this.values = [];
  }
}
