import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WizardComponent} from "./wizard.component";
import {WizardImageComponent} from "./wizard-image/wizard-image.component";

const routes: Routes = [
  {
    path: "",
    component: WizardComponent,
    children: [
      {path: "", redirectTo: 'image', pathMatch: "full"},
      {path: "image", component: WizardImageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
