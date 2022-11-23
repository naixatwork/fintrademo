import {IPeople} from "./people.type";
import {createReducer, on} from "@ngrx/store";
import {setPeople} from "./wizard-people.action";

const initialState: IPeople = {
  id: 0,
  avatar: "",
  email: "",
  name: ""
}

export const peopleReducer = createReducer(
  initialState,
  on(setPeople, (state, {...args}: IPeople) => {
    return {
      ...state,
      ...args
    }
  })
)
