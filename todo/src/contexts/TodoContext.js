"use client";

import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  // Reducer logic here
  // ...
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);  // 빈 배열로 초기화


  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
