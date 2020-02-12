import { createStore as reduxCreateStore } from 'redux';

const reducer = (state = [], action) => {
  const [ ...newState ] = state;
  switch (action.type) {
    
    case 'ADD_ITEM_TO_CART':
      newState.push(action.payload);
      return newState;
    
    case 'REMOVE_ITEM_FROM_CART':
      let index = state.findIndex(item => item.id === action.payload);
      newState.splice(index, 1);
      return newState;
    
    case 'EMPTY_CART':
      return [];
    
    default:
      return state;
  }
}

const createStore = () => reduxCreateStore(reducer);

export default createStore;