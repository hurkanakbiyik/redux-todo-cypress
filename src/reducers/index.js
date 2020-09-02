import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import searchFilter from "./searchFilter";

export default combineReducers({
  todos,
  visibilityFilter,
  searchFilter
});
