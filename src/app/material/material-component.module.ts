import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';

import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCoreModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdGridListModule,
  MdInputModule,
  MdRippleModule,
  MdSliderModule,
  MdSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCoreModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdGridListModule,
    MdInputModule,
    MdRippleModule,
    MdSliderModule,
    MdSlideToggleModule
  ],
  exports: [
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCoreModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdGridListModule,
    MdInputModule,
    MdRippleModule,
    MdSliderModule,
    MdSlideToggleModule
  ]
})
export class MaterialComponentModule { }
