import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wizard-image',
  templateUrl: './wizard-image.component.html',
  styleUrls: ['./wizard-image.component.scss']
})
export class WizardImageComponent {
  private form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    const initializeForm = () => {
      this.form = formBuilder.group({
        image: [null, [Validators.required]]
      })
    }

    initializeForm();
  }
}
