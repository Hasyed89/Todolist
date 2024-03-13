const initialState ={ 
  list: []};
const todoReducer = (state = initialState,action) => {
switch(action.type){
case "ADD_TODO":
  const{id,data} = action.payLoad;
  return{
     ...state,
     list:[ 
    // ...state gets the previous state  and ...state.list adds new data to the todolist
    ...state.list,
    {
      id:id,
      data:data
  }
]
}
case "DELETE_TODO":
const newList = state.list.filter((elem) => elem.id !== action.id) // we are using Filter method to match the selected id == action id if its not matching it returns
return{
     ...state,//previous list
     list:newList // current list after deleting
}
case "REMOVE_TODO":
  return{
    ...state,
    list: []
  }
default: return state; 
}
}
 
export default todoReducer;