import {AfterViewInit, Component, ElementRef, OnInit, Self, ViewChildren} from '@angular/core';
import {WizardPeopleService} from "./wizard-people.service";
import {IPeople} from "./people.type";
import {Store} from "@ngrx/store";
import {setPeople} from "./wizard-people.action";
import {first, map} from "rxjs";
import {RadioButton} from "primeng/radiobutton";
import {isObjectEmpty} from "../../shared/functions/isObjectEmpty/isObjectEmpty.func";

@Component({
  selector: 'app-wizard-people',
  templateUrl: './wizard-people.component.html',
  styleUrls: ['./wizard-people.component.scss'],
  providers: [WizardPeopleService]
})
export class WizardPeopleComponent implements OnInit {
  @ViewChildren("radioButton") radioButtonRefs!: RadioButton[];

  public selectedPeople!: IPeople;

  public get isPeopleSelected(): boolean {
    return !isObjectEmpty(this.selectedPeople)
  }

  constructor(
    @Self() public readonly peopleService: WizardPeopleService,
    private readonly store: Store<{ wizard: { people: IPeople } }>
  ) {
  }

  ngOnInit(): void {
    const setFormValueFromStore = () => {
      const setFormValue = (people: IPeople) => {
        this.selectedPeople = people;
      }

      this.store
        .pipe(
          first(),
          map((storeValue) => {
            return storeValue.wizard.people
          })
        )
        .subscribe({
            next: setFormValue
          }
        )
    }

    setFormValueFromStore();
  }

  public updateStoreOnPersonSelect(): void {
    if (!this.selectedPeople) return;

    this.store.dispatch(setPeople(this.selectedPeople));
  }
}


