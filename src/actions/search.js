export const CHANGE_SEARCH = "CHANGE_SEARCH";
export const FILTER_WITH_SEARCH = "FILTER_WITH_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  };
}

export function filterWithSearch() {
  return {
    type: FILTER_WITH_SEARCH
  };
}
