import { MinimumMaximumRange } from './minimum-maximum-range';

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

  updateFromJson(jsonObject: AdditionOptions) {
    this.addendRanges = jsonObject.addendRanges;
    this.enabled = jsonObject.enabled;
  }
}
