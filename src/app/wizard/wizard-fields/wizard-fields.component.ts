import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wizard-fields',
  templateUrl: './wizard-fields.component.html',
  styleUrls: ['./wizard-fields.component.scss']
})
export class WizardFieldsComponent {
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

  constructor(private readonly formBuilder: FormBuilder) {
    const initializeForm = () => {
      this._form = formBuilder.group({
        amount: [null, [Validators.required]],
        date: [null, [Validators.required]],
        status: [null, [Validators.required]]
      })
    }

    initializeForm();

    this.form.valueChanges.subscribe(console.log)
  }
}
