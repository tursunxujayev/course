import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";

function App() {

  const [todos, setTodos] = React.useState(
      [
        // {id: 1, completed: false, title: 'React'},
        // {id: 2, completed: true, title: 'Vue'},
        // {id: 3, completed: false, title: 'Angular'},
      ],
  );
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then((todos) => {
          setTimeout(() => {
            setTodos(todos)
          }, 1000);
        })
  }, []);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat({
          title,
          id: Date.now(),
          completed: false
        }
    ))
  }

  return (
      <Context.Provider value={{removeTodo}}>
        <div className="wrapper">
          <h1>React</h1>
          <AddTodo onCreate={addTodo}/>

          {
            todos.length ? <TodoList todos={todos}
                                     onToggle={toggleTodo}/>
                : <Loader />
          }

        </div>
      </Context.Provider>
  );
}

export default App;




