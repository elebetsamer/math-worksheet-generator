import { MinimumMaximumRange } from './minimum-maximum-range';

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
