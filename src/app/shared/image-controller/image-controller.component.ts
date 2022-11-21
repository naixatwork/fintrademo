import { Component } from '@angular/core';
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {FormBuilder, NgControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-image-controller',
  templateUrl: './image-controller.component.html',
  styleUrls: ['./image-controller.component.scss']
})
export class ImageControllerComponent extends FormControlAdapter {
  constructor(
    private readonly formBuilder: FormBuilder,
    ngControl: NgControl
  ) {
    super(
      formBuilder.group({
        value: ["", [Validators.required]]
      }),
      ngControl
    );
  }
}
