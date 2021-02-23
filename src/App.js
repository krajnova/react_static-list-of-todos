import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  author: users.find(user => todo.userId === user.id),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
