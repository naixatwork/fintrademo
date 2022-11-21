import {Component, SkipSelf} from '@angular/core';
import {FormControlAdapter} from "../FormControlAdapater/FormControlAdapter";
import {FormBuilder, NgControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-image-controller',
  templateUrl: './image-controller.component.html',
  styleUrls: ['./image-controller.component.scss']
})
export class ImageControllerComponent extends FormControlAdapter {
  public get selectedFiles(): File[] {
    return this.form.value["value"] as File[] || [];
  }

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

  public setFileToForm(event: {currentFiles: File[]}): void {
    const {currentFiles} = event;

    this.form.setValue({value: currentFiles});
  }

  public removeFileFromForm(event: {file: File}): void {
    const currentValue = this.form.value["value"] as File[];

    const filteredFileArray = currentValue.filter(file => file.name !== event.file.name);

    this.form.setValue({value: filteredFileArray});
  }
}
