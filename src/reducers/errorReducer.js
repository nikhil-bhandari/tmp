import {APPLICATIONS} from "../constants";

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case APPLICATIONS.LOAD_ERROR:
      return action.error;
    case APPLICATIONS.LOAD:
    case APPLICATIONS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};
