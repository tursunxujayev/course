import React from "react";
import PropTypes from 'prop-types';

function AddTodo({onCreate}) {

  const [value, setValue] = React.useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value)
      setValue("")
    }
  }

  return (
      <form className="form" onSubmit={submitHandler}>
        <input type="text"
               className="text-input" value={value}
               onChange={event => setValue(event.target.value)}/>
        <button type={"submit"} className={"btn-input"}>Add</button>
      </form>
  );
}

export default AddTodo;

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

