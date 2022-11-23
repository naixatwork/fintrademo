import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FieldsForm} from "./wizard-fields.reducer";
import {Store} from "@ngrx/store";
import {setImages} from "../wizard-image/wizard-image.action";
import {debounceTime, first, map} from "rxjs";
import {setFields} from "./wizard-fields.action";

@Component({
  selector: 'app-wizard-fields',
  templateUrl: './wizard-fields.component.html',
  styleUrls: ['./wizard-fields.component.scss']
})
export class WizardFieldsComponent implements OnInit {
  private _form!: FormGroup;

  public dateLimit(): Record<string, Date> {
    const getToday = (): Record<string, Function> => {
      const today = new Date();
      const getTime = () => today.getTime();

      return {
        getTime
      };
    }
    const today = getToday();

    const convertNumberOfDaysToTime = (numberOfDays: number): number => {
      const HOURS_PER_DAY = 24;
      const MINUTES_PER_HOUR = 60;
      const SECONDS_PER_MINUTE = 60;
      const MILLISECONDS_PER_SECOND = 1000;
      return numberOfDays * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
    }

    const getFiveDaysAfterToday = () => {
      const NUMBER_OF_DAYS_AFTER = 5;
      return new Date(today["getTime"]() + convertNumberOfDaysToTime(NUMBER_OF_DAYS_AFTER));
    }

    const getTomorrow = () => {
      const NUMBER_OF_DAYS_AFTER = 1;
      return new Date(today["getTime"]() + convertNumberOfDaysToTime(NUMBER_OF_DAYS_AFTER));
    }
    return {
      max: getFiveDaysAfterToday(),
      min: getTomorrow()
    }
  }

  public get form(): FormGroup {
    return this._form;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<{ wizard: { fields: FieldsForm } }>
  ) {
    const initializeForm = () => {
      this._form = formBuilder.group({
        amount: [null, [Validators.required]],
        date: [null, [Validators.required]],
        status: [null, [Validators.required]],
        fund: [null, [Validators.required]]
      })
    }

    initializeForm();
  }

  ngOnInit(): void {
    const setFormValueFromStore = () => {
      const setFormValue = ({amount, date, status, fund}: FieldsForm) => {
        this.form.get('amount')?.setValue({value: amount})
        this.form.get('date')?.setValue({value: date})
        this.form.get('status')?.setValue({value: status})
        this.form.get('fund')?.setValue({value: fund})
      }

      this.store
        .pipe(
          first(),
          map((storeValue) => {
            return storeValue.wizard.fields
          })
        )
        .subscribe({
            next: setFormValue
          }
        )
    }

    const updateStoreOnFormValueChange = () => {
      const dispatchStore = ({...args}: FieldsForm) => {
        this.store.dispatch(setFields(args));
      }

      this._form.valueChanges
        .pipe(
          debounceTime(300),
          map((value) => {
            return {
              amount: value.amount?.value,
              date: value.date?.value,
              status: value.status?.value,
              fund: value.fund?.value,
            };
          })
        )
        .subscribe({
          next: dispatchStore
        })
    }

    setFormValueFromStore();
    updateStoreOnFormValueChange();
  }
}
