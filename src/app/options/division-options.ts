import { MinimumMaximumRange } from './minimum-maximum-range';

export class DivisionOptions {
  decimalPlaces = 2;
  dividendRange = new MinimumMaximumRange(100, 200);
  divisorRange = new MinimumMaximumRange(1, 20);
  enabled = false;
  showDecimals = true;
  showRemainders = false;
}
