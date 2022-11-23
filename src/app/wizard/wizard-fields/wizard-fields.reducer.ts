import {createReducer, on} from "@ngrx/store";
import {setFields} from "./wizard-fields.action";

export type FieldsForm = {
  amount: number,
  date: Date | null,
  status: string,
  fund: string
}

export const initialState: FieldsForm = {
  amount: 0,
  status: "",
  date: null,
  fund: ""
}

export const fieldsReducer = createReducer(
  initialState,
  on(setFields, (state, {...args}) => {
    return {
      ...state,
      ...args
    }
  })
)
