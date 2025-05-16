import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <h2 className="todo-heading">To-Do App</h2>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
