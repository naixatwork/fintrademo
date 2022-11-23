import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {debounceTime, map} from "rxjs";
import {setImages} from "./wizard-image.action";

@Component({
  selector: 'app-wizard-image',
  templateUrl: './wizard-image.component.html',
  styleUrls: ['./wizard-image.component.scss']
})
export class WizardImageComponent implements OnInit {
  private _form!: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<{ wizard: { image: File[] } }>
  ) {
    const initializeForm = () => {
      this._form = formBuilder.group({
        images: [null, [Validators.required]]
      })
    }

    initializeForm();
  }

  ngOnInit() {
    const updateStoreOnFormValueChange = () => {
      const dispatchStore = (images: File[]) => {
        this.store.dispatch(setImages({images}))
      }

      this._form.valueChanges
        .pipe(
          debounceTime(300),
          map((value) => {
            return value.images.value;
          })
        )
        .subscribe({
          next: dispatchStore
        })
    }

    updateStoreOnFormValueChange();
  }
}
