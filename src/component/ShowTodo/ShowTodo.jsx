import { useContext, useState } from "react";
import { GlobalTodoContext } from "../../context/GlobalState";
import Todo from "../Todo/Todo";
import "./ShowTodo.css";

function ShowTodo() {
  const { todos } = useContext(GlobalTodoContext);
  const [isEdit, setIsEdit] = useState(null);

  return (
    <ul className="show__todo">
      {
        todos.length > 0 ? todos.map((todo, index) => (
          <Todo todo={todo} key={index} isEdit={isEdit} setIsEdit={setIsEdit}/>
        )) : <h1>No task Added yet.</h1>
      }
      
    </ul>
  );
}

export default ShowTodo;
