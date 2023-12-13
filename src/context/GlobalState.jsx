/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

const initialState = {
  todos: [],
};

const getLocalData = ()=>{
  const dataFromLocal = localStorage.getItem("state");
  return dataFromLocal ? JSON.parse(dataFromLocal) : initialState;
}

export const GlobalTodoContext = createContext(getLocalData());

export const GlobalTodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, getLocalData());

  useEffect(()=>{
    localStorage.setItem("state",JSON.stringify(state));
  },[state]);

  const values = {
    todos: state.todos,
    dispatch,
  };

  return (
    <GlobalTodoContext.Provider value={values}>
      {children}
    </GlobalTodoContext.Provider>
  );
};
