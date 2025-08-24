import React, { useState } from "react";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build Todo App", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const todo = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div data-testid="todo-container" className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <form onSubmit={addTodo} data-testid="add-todo-form" className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          data-testid="todo-input"
          className="border p-2 flex-1"
        />
        <button type="submit" data-testid="add-button" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
            <span
              data-testid={`todo-${todo.id}`}
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-${todo.id}`}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
