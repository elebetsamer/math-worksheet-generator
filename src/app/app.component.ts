import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './analytics/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router, public analytics: AnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analytics.trackPage(event.urlAfterRedirects);
      }
    });
  }
}
