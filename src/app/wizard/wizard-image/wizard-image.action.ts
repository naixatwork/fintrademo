import {createAction, props} from '@ngrx/store';

export const setImages = createAction(
  '[WizardImageComponent] setImage',
  props<{images: File[]}>()
);
