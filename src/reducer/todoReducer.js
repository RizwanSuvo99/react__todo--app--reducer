/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
export const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD__TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "DELETE__TODO":
      const filteredTodos = [...state.todos].filter(
        (todo) => todo.id !== payload.id
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    case "UPDATE__TODO":
      const updatedTodos = [...state.todos].map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            input: payload.input,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case "COMPLETE__TODO":
      const completedTodos = [...state.todos].map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: completedTodos,
      };
    default:
      return state;
  }
};
