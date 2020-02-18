import { createStore as reduxCreateStore } from 'redux';

const reducer = (state = [], action) => {
  const [ ...newState ] = state;
  switch (action.type) {
    
    case 'ADD_ITEM_TO_CART':
      let alreadyInCart = newState.find(item => item.id === action.payload.id);
      if (alreadyInCart) alreadyInCart.amount++;
      else newState.push({
        ...action.payload,
        amount: 1,
      });
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