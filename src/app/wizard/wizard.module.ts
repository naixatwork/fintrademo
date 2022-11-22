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


@NgModule({
  declarations: [
    WizardComponent,
    WizardImageComponent,
    WizardFieldsComponent,
    WizardPeopleComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule,
    TableModule,
    ImageModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class WizardModule { }
