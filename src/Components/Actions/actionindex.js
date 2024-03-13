export const addTodo = (data)=>{
return{ 
  type:"ADD_TODO",
  payLoad:{// here payLoad hold the data of id and data in the form of object
    id: new Date().getTime().toString(),
    data:data
  }
}
} 
export const deleteTodo = (id)=>{
  return{
    type:"DELETE_TODO",
    id
  }
  }
  export const removeTodo = ()=>{
    return{
      type:"REMOVE_TODO"
    }
    }