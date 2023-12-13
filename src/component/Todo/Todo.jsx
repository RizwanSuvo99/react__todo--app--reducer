/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import "./Todo.css";
import { MdDelete, MdTask } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { GlobalTodoContext } from "../../context/GlobalState";
import { useContext, useState } from "react";

function Todo({ todo: { input, id, isComplete }, isEdit, setIsEdit }) {
  const { dispatch } = useContext(GlobalTodoContext);
  const [updateInput, setUpdateInput] = useState(input);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE__TODO",
      payload: {
        id,
      },
    });
  };

  const handleUpdate = (id) => {
    setIsEdit(null);
    dispatch({
      type: "UPDATE__TODO",
      payload: {
        id,
        input: updateInput,
      },
    });
  };

  const handleComplete = (id) => {
    dispatch({
      type: "COMPLETE__TODO",
      payload: {
        id,
      },
    });
  };

  return (
    <div className="single__todo">
      <div className="todo__text">
        {isEdit === id ? (
          <textarea
            rows={6}
            className="textarea"
            value={updateInput}
            onChange={(e) => setUpdateInput(e.target.value)}
          />
        ) : (
          <h1 className={isComplete && "line__through"}>{input}</h1>
        )}
      </div>
      <div className="todo__icons">
        {isEdit === id ? (
          <RiTaskFill onClick={() => handleUpdate(id)} />
        ) : (
          <div>
            <MdDelete onClick={() => handleDelete(id)} />
            <MdTask onClick={() => handleComplete(id)} />
            <FaEdit onClick={() => setIsEdit(id)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
