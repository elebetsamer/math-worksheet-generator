import { MinimumMaximumRange } from './minimum-maximum-range';

export class DivisionOptions {
  decimalPlaces = 2;
  dividendRange = new MinimumMaximumRange(100, 200);
  divisorRange = new MinimumMaximumRange(1, 20);
  enabled = false;
  showDecimals = true;
  showRemainders = false;

  updateFromJson(jsonObject: DivisionOptions) {
    this.decimalPlaces = jsonObject.decimalPlaces;
    this.dividendRange = jsonObject.dividendRange;
    this.divisorRange = jsonObject.divisorRange;
    this.enabled = jsonObject.enabled;
    this.showDecimals = jsonObject.showDecimals;
    this.showRemainders = jsonObject.showRemainders;
  }
}
