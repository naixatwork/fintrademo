import { createReducer, on } from '@ngrx/store';
import {setImages} from "./wizard-image.action";

const initialState: File[] = [];

export const imageReducer = createReducer(
  initialState,
  on(setImages, (state, {images}) => [...images]),
);
