import {APPLICATIONS} from "../constants";

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case APPLICATIONS.LOAD:
      return true;
    case APPLICATIONS.LOAD_SUCCESS:
      return false;
    case APPLICATIONS.LOAD_ERROR:
      return false;
    default:
      return state;
  }
};
