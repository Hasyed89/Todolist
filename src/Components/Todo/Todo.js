import { useState } from "react";
import{addTodo,deleteTodo,removeTodo} from '../Actions/actionindex'
import{useDispatch,useSelector} from 'react-redux'
import todoReducer from "../Reducer/todoReducer";
import '../Todo.css'
const Todo = () => {
  const[inputData,setInputData]=useState('');
  const list = useSelector((state)=>state.todoReducer.list)
  const dispatch =useDispatch()
  return (  
    <div className="main-div">
    <div className="child-div">
      <figure>
        <figcaption>Add Your List Here  &#x270C;  </figcaption>
      </figure>
      <div className="addItems">
        <input type="text" placeholder='Add items &#x270D;' value={inputData}
        onChange={(e)=>setInputData(e.target.value)} />
        <i className= "fa fa-plus add-btn" onClick={()=>{
          dispatch(addTodo(inputData))
          setInputData("")
        }}></i>
      </div>
      <div className="showItems">

        {
          list.map((elem)=>{
            return(
             <div className="eachItem" key={elem.id}>
          <h3>{elem.data}</h3>
        <i className= "far fa-trash-alt add-btn" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
        </div> 
            )  })
        }
      
      </div>
      <div className="showItems"> 
<button className="btn effect04" data-sm-link-text = "remove All"
onClick={()=>dispatch(removeTodo())}
><span>Check List</span></button> </div>
    </div>
  </div>
  );
}
 
export default Todo;