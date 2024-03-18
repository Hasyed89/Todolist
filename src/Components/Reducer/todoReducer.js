const initialState ={ 
  list: JSON.parse(localStorage.getItem('lists')) || []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TODO":
      const { id, data } = action.payload;
      const newList = [...state.list, { id, data }];
      localStorage.setItem('lists', JSON.stringify(newList));
      return {
        ...state,
        list: newList
      };
    case "DELETE_TODO":
      const updatedListDelete = state.list.filter((elem) => elem.id !== action.id);
      localStorage.setItem('lists', JSON.stringify(updatedListDelete));
      return {
        ...state,
        list: updatedListDelete
      };
    case "REMOVE_TODO":
      localStorage.removeItem('lists');
      return {
        ...state,
        list: []
      };
    case "UPDATE_TODO":
      const { id: updateId, newData } = action.payload; 
      const updatedListUpdate = state.list.map(todo =>
        todo.id === updateId ? { ...todo, data: newData } : todo
      );
      localStorage.setItem('lists', JSON.stringify(updatedListUpdate));
      return {
        ...state,
        list: updatedListUpdate
      };
    default:
      return state; 
  }
};

export default todoReducer;
