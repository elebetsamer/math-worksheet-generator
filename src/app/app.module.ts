import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AnalyticsService } from './analytics/analytics.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
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
    MaterialComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AnalyticsService,
    AuthService,
    WorksheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
