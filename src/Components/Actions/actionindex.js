export const addTodo = (data)=>{
return{ 
  type:"ADD_TODO",
  payLoad:{
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
    export const updateTodo = (id, newData) => ({
      type: 'UPDATE_TODO',
      payload: { id, newData }
    });