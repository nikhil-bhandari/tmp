import {APPLICATIONS} from "../constants";

export const applicationReducer = (state = [], action) => {
  if (action.type === APPLICATIONS.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }
  return state;
};
