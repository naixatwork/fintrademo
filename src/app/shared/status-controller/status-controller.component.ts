import {Component, Input, SkipSelf} from '@angular/core';
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {FormBuilder, NgControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-status-controller',
  templateUrl: './status-controller.component.html',
  styleUrls: ['./status-controller.component.scss']
})
export class StatusControllerComponent extends FormControlAdapter {
  @Input() public label: string = "";

  public options!: Record<"status", string>[];

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

    const setOptions = () => {
      this.options = [
        {
          status: "foo"
        },

        {
          status: "bar"
        },

        {
          status: "fea"
        },

        {
          status: "bae"
        }
      ]
    }


    setOptions();
  }
}
