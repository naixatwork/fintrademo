import {Component, Input, SkipSelf} from '@angular/core';
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {FormBuilder, NgControl, Validators} from "@angular/forms";
import {alphabetOnlyRegex} from "../regex/alphabetOnly.regex";

@Component({
  selector: 'app-fund-controller',
  templateUrl: './fund-controller.component.html',
  styleUrls: ['./fund-controller.component.scss']
})
export class FundControllerComponent extends FormControlAdapter {
  @Input() public label: string = "";

  constructor(
    @SkipSelf() private readonly formBuilder: FormBuilder,
    ngControl: NgControl
  ) {
    super(
      formBuilder.group({
        value: [null, [Validators.required, Validators.pattern(alphabetOnlyRegex)]]
      }),
      ngControl
    );
  }
}
