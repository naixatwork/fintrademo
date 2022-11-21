import {Component, Input, SkipSelf} from '@angular/core';
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {FormBuilder, NgControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-amount-controller',
  templateUrl: './amount-controller.component.html',
  styleUrls: ['./amount-controller.component.scss']
})
export class AmountControllerComponent extends FormControlAdapter {
  @Input() public label: string = "";

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
