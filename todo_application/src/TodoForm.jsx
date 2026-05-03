import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    //trim remove space
    if (title.trim().length === 0) {
      toast.error("Please Fill Input", {
        autoClose: 2000,
      });
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };

    addTodo(newTodo);

    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm_input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
