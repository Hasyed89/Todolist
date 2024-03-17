import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/actionindex";
import { nanoid } from "nanoid";
import "../Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      const newTodo = {
        id: nanoid(), // Generate a unique ID for the new todo item
        data: inputData,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo }); // Dispatch the action with the new todo object as payload
      setInputData("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here &#x270C;</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Add items &#x270D;"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="fa fa-plus add-btn" onClick={handleAddTodo}></i>
        </div>
        <div className="showItems">
          {list.map((elem) => (
            <div className="eachItem" key={elem.id}>
              <h3>{elem.data}</h3>
              <i
                className="far fa-trash-alt add-btn"
                onClick={() => handleDeleteTodo(elem.id)}
              ></i>
            </div>
          ))}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="remove All"
            onClick={handleRemoveAll}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
