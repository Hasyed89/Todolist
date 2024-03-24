// export const addTodo = (data)=>{
// return{ 
//   type:"ADD_TODO",
//   payLoad:{
//     id: new Date().getTime().toString(),
//     data:data
//   }
// }
// } 
// export const deleteTodo = (id)=>{
//   return{
//     type:"DELETE_TODO",
//     id
//   }
//   }
//   export const removeTodo = ()=>{
//     return{
//       type:"REMOVE_TODO"
//     }
//     }
//     export const updateTodo = (id, newData) => ({
//       type: 'UPDATE_TODO',
//       payload: { id, newData }
//     });
export const addTodo = (tasks) => ({
  type: "ADD_TODO",
  payload: tasks,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const removeTodo = () => ({
  type: "REMOVE_TODO",
});

export const updateTodo = (id, newData) => ({
  type: "UPDATE_TODO",
  payload: { id, newData },
});


export const addTask = (taskId, newTask) => {
  return {
    type: "ADD_TASK",
    payload: {
      taskId: taskId,
      newTask: newTask
    }
  };
};