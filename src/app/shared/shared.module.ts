import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainBarComponent} from './main-bar/main-bar.component';
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DrawerComponent} from './drawer/drawer.component';
import {StepsModule} from "primeng/steps";
import {ImageControllerComponent} from './image-controller/image-controller.component';
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ImageModule} from "primeng/image";
import { AmountControllerComponent } from './amount-controller/amount-controller.component';
import {InputNumberModule} from "primeng/inputnumber";
import { DateControllerComponent } from './date-controller/date-controller.component';
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    MainBarComponent,
    DrawerComponent,
    ImageControllerComponent,
    AmountControllerComponent,
    DateControllerComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    RippleModule,
    StepsModule,
    FileUploadModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ImageModule,
    InputNumberModule,
    CalendarModule
  ],
  exports: [
    AccordionModule,
    AutoCompleteModule,
    MainBarComponent,
    DrawerComponent,
    StepsModule,
    ReactiveFormsModule,
    FormsModule,
    ImageControllerComponent,
    HttpClientModule,
    AmountControllerComponent,
    DateControllerComponent
  ]
})
export class SharedModule { }
