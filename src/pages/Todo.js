import React, { useEffect, useState } from 'react';
import '../styles/Todo.css';
import Todo_img from '../assets/todo.png';

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div className='todo-list'>
      <img src={Todo_img} alt='todo' />
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <input type='checkbox' checked={todo.completed} readOnly />
          <span className='todo-title'>{todo.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Todo;
