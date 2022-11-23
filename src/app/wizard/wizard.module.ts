import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {SharedModule} from "../shared/shared.module";
import { WizardImageComponent } from './wizard-image/wizard-image.component';
import { WizardFieldsComponent } from './wizard-fields/wizard-fields.component';
import { WizardPeopleComponent } from './wizard-people/wizard-people.component';
import {TableModule} from "primeng/table";
import {ImageModule} from "primeng/image";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import { WizardSummaryComponent } from './wizard-summary/wizard-summary.component';
import {StoreModule} from "@ngrx/store";
import {imageReducer} from "./wizard-image/wizard-image.reducer";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {fieldsReducer} from "./wizard-fields/wizard-fields.reducer";


@NgModule({
  declarations: [
    WizardComponent,
    WizardImageComponent,
    WizardFieldsComponent,
    WizardPeopleComponent,
    WizardSummaryComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule,
    TableModule,
    ImageModule,
    CheckboxModule,
    RadioButtonModule,
    StoreModule.forFeature('wizard', {
      "image": imageReducer,
      "fields": fieldsReducer
    }),
    ButtonModule,
    RippleModule
  ]
})
export class WizardModule { }
