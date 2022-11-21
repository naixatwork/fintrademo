import {Component, Input, SkipSelf} from '@angular/core';
import {FormBuilder, NgControl, Validators} from "@angular/forms";
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";

@Component({
  selector: 'app-date-controller',
  templateUrl: './date-controller.component.html',
  styleUrls: ['./date-controller.component.scss']
})
export class DateControllerComponent extends FormControlAdapter {
  @Input() public label: string = "";

  @Input() public minDate!: Date;
  @Input() public maxDate!: Date;


  constructor(
    @SkipSelf() private readonly formBuilder: FormBuilder,
    ngControl: NgControl
  ) {
    super(
      formBuilder.group({
        value: [null, [Validators.required]]
      }),
      ngControl
    );
  }
}
