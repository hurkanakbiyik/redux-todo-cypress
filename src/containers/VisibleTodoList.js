import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { changeSearch, filterWithSearch, clearSearch } from "../actions/search";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const getSearchedTodos = (todos, search) => {
  return search === "" || !search
    ? todos
    : todos.filter((todo) => todo.text.indexOf(search) > -1);
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    getSearchedTodos(state.todos, state.searchFilter.activeSearch),
    state.visibilityFilter
  ),
  searchText: state.searchFilter.searchText,
  activeSearch: state.searchFilter.activeSearch
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
  onSubmitForm: (event) => {
    event.preventDefault();
    return dispatch(filterWithSearch());
  },
  onClear: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
