import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WizardComponent} from "./wizard.component";
import {WizardImageComponent} from "./wizard-image/wizard-image.component";
import {WizardFieldsComponent} from "./wizard-fields/wizard-fields.component";
import {WizardPeopleComponent} from "./wizard-people/wizard-people.component";

const routes: Routes = [
  {
    path: "",
    component: WizardComponent,
    children: [
      {path: "", redirectTo: 'people', pathMatch: "full"},
      {path: "image", component: WizardImageComponent},
      {path: "fields", component: WizardFieldsComponent},
      {path: "people", component: WizardPeopleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
