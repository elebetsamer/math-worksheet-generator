import { MinimumMaximumRange } from './minimum-maximum-range';

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

  updateFromJson(jsonObject: SubtractionOptions) {
    this.allowNegativeAnswers = jsonObject.allowNegativeAnswers;
    this.enabled = jsonObject.enabled;
    this.minuendRange = jsonObject.minuendRange;
    this.subtrahendRanges = jsonObject.subtrahendRanges;
  }
}
