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


@NgModule({
  declarations: [
    MainBarComponent,
    DrawerComponent,
    ImageControllerComponent
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
    ImageModule
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
    HttpClientModule
  ]
})
export class SharedModule { }
