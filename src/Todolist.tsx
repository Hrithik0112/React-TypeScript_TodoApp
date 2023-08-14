import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "HAve to Learn About Redis", completed: false },
    { id: 2, text: "Have To read documentation About TypeScript", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  return (
    <div className="main_container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        value={input}
        type="text"
        placeholder="Add Your Task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Todolist;
