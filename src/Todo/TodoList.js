// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoItem from "./TodoItem";
import './style.css';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

function TodoList(props) {
  return (
      <div>
        <ul>
          {props.todos.map((todo, index) => {
            return <TodoItem todo={todo}
                             key={todo.id}
                             index={index}
            onChange={props.onToggle}/>;
          })}
        </ul>
      </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;