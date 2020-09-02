import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({
  todos,
  toggleTodo,
  onSubmitForm,
  onChangeSearch,
  onClear,
  searchText,
  activeSearch
}) => (
  <div>
    {todos.length > 0 && (
      <form onSubmit={onSubmitForm}>
        <input
          onChange={onChangeSearch}
          type="text"
          placeholder={"Search"}
          value={searchText}
          data-hook="todo-search-input"
        />
        <input type="submit" value="Search" data-hook="todo-search-button" />
        <input type="button" value="Clear" onClick={onClear} />
      </form>
    )}
    <ul>
      {todos.map((todo) => (
        <Todo
          activeSearch={activeSearch}
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  activeSearch: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default TodoList;
