import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        { id: Date.now(), text: newTodo, completed: false },
        ...prevTodos,
      ]);
      setNewTodo('');
    }
  };

  const handleTodoClick = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleResetClick = () => {
    setTodos([]);
  };

  return (
    <div className="todo-app">
      <div className="header">
        <h1>TODO App</h1>
        <button className="reset-button" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new TODO..."
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo ${todo.completed ? 'completed' : ''}`}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
