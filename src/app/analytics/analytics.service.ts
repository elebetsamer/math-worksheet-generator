import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

declare let gtag: Function;

@Injectable()
export class AnalyticsService {
  trackEventWithCategory(category: string, eventName: string, eventParameters?: Object) {
    const parameters = eventParameters || {};

    parameters['event_category'] = category;

    this.trackEvent(eventName, parameters);
  }

  trackEvent(eventName: string, eventParameters?: {}) {
    if (eventParameters) {
      gtag('event', eventName, eventParameters);
    } else {
      gtag('event', eventName);
    }
  }

  trackPage(url: string) {
    gtag('config', environment.analytics.trackingId, {'page_path': url});
  }
}
