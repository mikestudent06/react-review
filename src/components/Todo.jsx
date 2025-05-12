import React, { useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, settodo] = useState("");
  const [tasks, settasks] = useState([]);

  const addTodo = () => {
    if (!todo.trim("")) return;
    settodo("");
    const newTodo = {
      id: Date.now(),
      task: todo,
      completed: false,
    };
    settasks([...tasks, newTodo]);
  };
  const deleteTodo = (id) => {
    const todoIndex = tasks.findIndex((task) => task.id === id)
    return settasks(tasks.splice(todoIndex,0,"Michel"))
    // settasks(tasks.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    const updatedTodos = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );
    settasks(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo</h1>
      <div className="add-todo">
        <input
          type="text"
          className="input-todo"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button className="todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <div className="todo-list">
        <h1>Todo List</h1>
        <ul>
          {tasks.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
