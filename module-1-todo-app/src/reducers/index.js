import {combineReducers} from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import {withReduxStateSync} from "redux-state-sync";
const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default withReduxStateSync(rootReducer);
