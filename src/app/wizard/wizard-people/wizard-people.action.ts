import {createAction, props} from "@ngrx/store";
import {IPeople} from "./people.type";

export const setPeople = createAction(
  '[WizardPeopleComponent] setPeople',
  props<IPeople>()
)
