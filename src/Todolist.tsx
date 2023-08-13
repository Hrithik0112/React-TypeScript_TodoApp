import React from "react";

const Todolist = () => {
  return (
    <div className="main_container">
      <h1>Todo List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <input type="text" placeholder="Add Your Task"></input>
      <button>Add</button>
    </div>
  );
};

export default Todolist;
