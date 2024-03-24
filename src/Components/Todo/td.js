// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo, removeTodo,updateTodo } from "../Actions/actionindex";
// import { nanoid } from "nanoid";
// import "../Todo.css";

// const Todo = () => {
//   const [inputData, setInputData] = useState("");
//   const list = useSelector((state) => state.todoReducer.list);
//   const dispatch = useDispatch();

//   const handleAddTodo = () => {
//     if (inputData.trim() !== "") {
//       const newTodo = {
//         id: nanoid(), 
//         data: inputData,
//       };
//       dispatch({ type: "ADD_TODO", payload: newTodo }); // Dispatch the action with the new todo object as payload
//       setInputData("");
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleRemoveAll = () => {
//     dispatch(removeTodo());
//   };
//   const handleEditTodo = (id) => {
//     const newData = prompt('Enter new todo text:');
//     if (newData !== null && newData.trim() !== '') {
//       dispatch(updateTodo(id, newData));
//     }
//   };
//   return (
//     <div className="main-div">
//       <div className="child-div">
//         <figure>
//           <figcaption>Add Your List Here &#x270C;</figcaption>
//         </figure>
//         <div className="addItems">
//           <input
//             type="text"
//             placeholder="Add items &#x270D;"
//             value={inputData}
//             onChange={(e) => setInputData(e.target.value)}
//           />
//           <i className="fa fa-plus add-btn" onClick={handleAddTodo}></i>
//         </div>
//         <div className="showItems">
//           {list.map((elem) => (
//             <div className="eachItem" key={elem.id}>
//               <h3>{elem.data}</h3><p>{elem.id}</p>
//               <i
//                 className="far fa-trash-alt add-btn"
//                 onClick={() => handleDeleteTodo(elem.id)}
//               ></i>
//               <i className="far fa-edit add-btn" onClick={() => handleEditTodo(elem.id)}></i>

//             </div>
//           ))}
//         </div>
//         <div className="showItems">
//           <button
      
//             onClick={handleRemoveAll}
//           >
//             <span>Remove All</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;
// Todo Component
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo, updateTodo } from "../Actions/actionindex";
import { nanoid } from "nanoid";
import "../Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const tasks = useSelector((state) => state.todoReducer.tasks);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      const newTask = {
        id: nanoid(),
        data: inputData,
      };
      dispatch(addTodo([newTask]));
      setInputData("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };

  const handleEditTodo = (id) => {
    const newData = prompt('Enter new task text:');
    if (newData !== null && newData.trim() !== '') {
      dispatch(updateTodo(id, newData));
    }
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
          {tasks.map((task) => (
            <div className="eachItem" key={task.id}>
              <h3>{task.data}</h3> 
              <i
                className="far fa-trash-alt add-btn"
                onClick={() => handleDeleteTodo(task.id)}
              ></i>
              <i className="far fa-edit add-btn" onClick={() => handleEditTodo(task.id)}></i>
            </div>
          ))}
        </div>
        <div className="showItems">
          <button
            onClick={handleRemoveAll}
          >
            <span>Remove All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
