import React from "react";
import PropTypes from "prop-types";

// this could be seperate component
const getHighlightedText = (text, search) => {
  const parts = text.split(new RegExp(`(${search})`, "gi"));
  return (
    <span>
      {" "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === search.toLowerCase()
              ? { background: "yellow" }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
};

const Todo = ({ onClick, completed, text, activeSearch }) => (
  <li
    data-hook="todo-item"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {activeSearch ? getHighlightedText(text, activeSearch) : text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  activeSearch: PropTypes.string.isRequired
};

export default Todo;
