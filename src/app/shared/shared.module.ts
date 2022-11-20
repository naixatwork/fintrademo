import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBarComponent } from './main-bar/main-bar.component';
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { DrawerComponent } from './drawer/drawer.component';


@NgModule({
  declarations: [
    MainBarComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    AccordionModule,
    AutoCompleteModule,
    MainBarComponent,
    DrawerComponent
  ]
})
export class SharedModule { }
