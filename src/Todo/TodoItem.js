import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from "../context";


function TodoItem({todo, index, onChange}) {
  const {removeTodo} = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }
  return (
      <li className="li-item">
        <span className={classes.join(' ')}>
          <input type="checkbox" className="input"
                 checked={todo.completed}
                 onChange={() => onChange(todo.id)}/>
          <b>{index + 1}</b> &nbsp; {todo.title}
        </span>
        {/*<button className={"btn"} onClick={() => removeTodo(todo.id)}>&#128465;</button>*/}
        <button className={"btn"} onClick={removeTodo.bind(null, todo.id)}>&#128465;</button>
      </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem;