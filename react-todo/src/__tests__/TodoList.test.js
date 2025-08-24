import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const form = screen.getByTestId("add-todo-form");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(form);
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getByTestId("delete-1");
    fireEvent.click(deleteBtn);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
