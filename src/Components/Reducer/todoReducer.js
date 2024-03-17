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
      const updatedList = state.list.filter((elem) => elem.id !== action.id);
      localStorage.setItem('lists', JSON.stringify(updatedList));
      return {
        ...state,
        list: updatedList
      };
    case "REMOVE_TODO":
      localStorage.removeItem('lists');
      return {
        ...state,
        list: []
      };
    default:
      return state; 
  }
};

export default todoReducer;
