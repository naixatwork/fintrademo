import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBarComponent } from './main-bar/main-bar.component';
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";


@NgModule({
  declarations: [
    MainBarComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    AutoCompleteModule
  ],
  exports: [
    AccordionModule,
    AutoCompleteModule
  ]
})
export class SharedModule { }
