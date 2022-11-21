import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {SharedModule} from "../shared/shared.module";
import { WizardImageComponent } from './wizard-image/wizard-image.component';
import { WizardFieldsComponent } from './wizard-fields/wizard-fields.component';


@NgModule({
  declarations: [
    WizardComponent,
    WizardImageComponent,
    WizardFieldsComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule
  ]
})
export class WizardModule { }
