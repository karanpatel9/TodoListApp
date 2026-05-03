import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn JS", completed: true },
    { id: 3, title: "Learn App", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  //toggle means if true convert into false and visevarca
  const toggleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      });
    });
  };
  return (
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ToastContainer />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
