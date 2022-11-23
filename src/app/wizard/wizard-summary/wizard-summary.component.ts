import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FieldsForm} from "../wizard-fields/wizard-fields.reducer";
import {IPeople} from "../wizard-people/people.type";

@Component({
  selector: 'app-wizard-summary',
  templateUrl: './wizard-summary.component.html',
  styleUrls: ['./wizard-summary.component.scss']
})
export class WizardSummaryComponent {
  constructor(
    public readonly store: Store<{
      wizard: {
        image: File[],
        fields: FieldsForm,
        people: IPeople
      }
    }>
  ) {
  }
}
