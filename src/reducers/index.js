import {combineReducers} from 'redux'
import {loadingReducer} from "./loadingReducer";
import {errorReducer} from "./errorReducer";
import {applicationReducer} from "./applicationReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  applications: applicationReducer,
  error: errorReducer,
});

export default rootReducer;
