import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WizardComponent} from "./wizard.component";
import {WizardImageComponent} from "./wizard-image/wizard-image.component";
import {WizardFieldsComponent} from "./wizard-fields/wizard-fields.component";

const routes: Routes = [
  {
    path: "",
    component: WizardComponent,
    children: [
      {path: "", redirectTo: 'fields', pathMatch: "full"},
      {path: "image", component: WizardImageComponent},
      {path: "fields", component: WizardFieldsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
