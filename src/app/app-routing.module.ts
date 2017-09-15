import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksheetGeneratorComponent } from './worksheet-generator/worksheet-generator.component';

const routes: Routes = [
  {
    path: 'worksheet-generator',
    component: WorksheetGeneratorComponent
  },
  {
    path: 'worksheet-generator/:id',
    component: WorksheetGeneratorComponent
  },
  {
    path: '',
    redirectTo: '/worksheet-generator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
