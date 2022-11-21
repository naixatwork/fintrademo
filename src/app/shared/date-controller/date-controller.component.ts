import {ChangeDetectionStrategy, Component, Input, OnInit, SkipSelf} from '@angular/core';
import {FormBuilder, NgControl, Validators} from "@angular/forms";
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";

@Component({
  selector: 'app-date-controller',
  templateUrl: './date-controller.component.html',
  styleUrls: ['./date-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateControllerComponent extends FormControlAdapter implements OnInit {
  @Input() public label: string = "";

  @Input() public minDate!: Date;
  public _minDate!: Date;
  @Input() public maxDate!: Date;
  public _maxDate!: Date;


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

  ngOnInit() {
    const setDateLimits = () => {
      // To Prevent p-calendar calling for date limits indefinitely.
      this._minDate = this.minDate;
      this._maxDate = this.maxDate;
    }

    setDateLimits();
  }
}
