import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wizard-image',
  templateUrl: './wizard-image.component.html',
  styleUrls: ['./wizard-image.component.scss']
})
export class WizardImageComponent {
  private _form!: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  constructor(private readonly formBuilder: FormBuilder) {
    const initializeForm = () => {
      this._form = formBuilder.group({
        image: [null, [Validators.required]]
      })
    }

    initializeForm();
  }
}
