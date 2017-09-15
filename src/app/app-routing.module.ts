import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksheetGeneratorComponent } from './worksheet-generator/worksheet-generator.component';

const routes: Routes = [
  {
    path: '',
    component: WorksheetGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
