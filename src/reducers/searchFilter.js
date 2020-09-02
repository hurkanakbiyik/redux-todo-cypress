import {
  CHANGE_SEARCH,
  FILTER_WITH_SEARCH,
  CLEAR_SEARCH
} from "../actions/search";
const initialState = { searchText: "", activeSearch: "" };
const searchFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, searchText: action.search };
    case FILTER_WITH_SEARCH:
      return { ...state, activeSearch: state.searchText };
    case CLEAR_SEARCH:
      return { ...initialState };
    default:
      return state;
  }
};

export default searchFilter;
