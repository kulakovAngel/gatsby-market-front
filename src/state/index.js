import { createStore as reduxCreateStore } from 'redux';

const reducer = (state = [], action) => {
  switch (action.type) {
    
    case 'ADD_ITEM_TO_CART':
      const [ ...newState ] = state;
      newState.push(action.payload);
      return newState;
    
    case 'REMOVE_ITEM_FROM_CART':
      break;
    
    case 'EMPTY_CART':
      return [];
    
    default:
      return state;
  }
}

const createStore = () => reduxCreateStore(reducer);

export default createStore;