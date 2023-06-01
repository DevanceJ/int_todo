import React, { useEffect } from 'react';
import { useStore } from './store';

const TodoList = () => {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const fetchTodos = useStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todo.value;
    addTodo({
      id: Date.now(),
      title: todoText,
    });
    e.target.reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Enter a new todo"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span className="mr-2">{todo.title}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
