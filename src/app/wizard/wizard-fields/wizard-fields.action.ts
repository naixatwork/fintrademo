import {createAction, props} from '@ngrx/store';
import {FieldsForm} from "./wizard-fields.reducer";


export const setFields = createAction(
  '[WizardFieldsComponent] setFields',
  props<FieldsForm>()
);
