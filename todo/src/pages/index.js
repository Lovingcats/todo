// components/TodoList.js
"use client";
// pages/index.js
import React, { useState } from 'react';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [logs, setLogs] = useState([]);

    const addTodo = () => {
        if (todo.trim() === '') return;

        const newTodo = { text: todo, completed: false };
        setLogs([...logs, `Added: ${newTodo.text}`]);

        setTodos([...todos, newTodo]);
        setTodo('');
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;

        const action = newTodos[index].completed ? 'Completed' : 'Uncompleted';
        setLogs([...logs, `${action}: ${newTodos[index].text}`]);

        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const deletedTodo = todos[index];
        const newTodos = todos.filter((_, i) => i !== index);

        setLogs([...logs, `Removed: ${deletedTodo.text}`]);

        setTodos(newTodos);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                    >
                        <span>{todo.text}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index} className="log-item">
                        <span className="log-text">{log}</span>
                        <span className="log-time">{new Date().toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
