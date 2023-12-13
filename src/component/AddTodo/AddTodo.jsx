import { useContext, useRef } from "react";
import { GlobalTodoContext } from "../../context/GlobalState";
import "./AddTodo.css";

function AddTodo() {
  const { dispatch } = useContext(GlobalTodoContext);
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value.trim().length === 0) {
      alert("Empty input!");
    } else {
      dispatch({
        type: "ADD__TODO",
        payload: {
          input: input.current.value,
          id: Date.now(),
          isComplete: false,
        },
      });
    }
    input.current.value = "";
  };
  return (
    <div className="todo__input">
      <div className="todo__heading">
        <h1>Task Management</h1>
      </div>
      <form className="add__todo" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={input} />
        </div>
        <div>
          <button>Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
