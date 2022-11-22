import {Component, Self, ViewChildren} from '@angular/core';
import {WizardPeopleService} from "./wizard-people.service";
import {IPeople} from "./people.type";
import {Checkbox} from "primeng/checkbox";

@Component({
  selector: 'app-wizard-people',
  templateUrl: './wizard-people.component.html',
  styleUrls: ['./wizard-people.component.scss'],
  providers: [WizardPeopleService]
})
export class WizardPeopleComponent {
  @ViewChildren("checkbox") checkboxes!: Checkbox[];

  public selectedPeople?: IPeople;

  constructor(
    @Self() public readonly peopleService: WizardPeopleService
  ) {
  }
}


