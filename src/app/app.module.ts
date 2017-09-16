import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnalyticsService } from './analytics/analytics.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksheetGeneratorComponent } from './worksheet-generator/worksheet-generator.component';
import { WorksheetService } from './worksheet/worksheet.service';
import { MaterialComponentModule } from './material/material-component.module';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorksheetGeneratorComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule
  ],
  providers: [
    AnalyticsService,
    WorksheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
