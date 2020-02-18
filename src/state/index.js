import { createStore as reduxCreateStore, applyMiddleware } from 'redux';

let local;
let initialState;

if (typeof localStorage !== 'undefined') {
  local = localStorage.getItem('cart');
  initialState = local ? JSON.parse(local) : [];
}

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

//Middleware для записи в Local Storage
const localStoreLogger = store => next => action => {
  let result = next(action);
  localStorage.setItem('cart', JSON.stringify(store.getState()));
  return result;
}

const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  applyMiddleware(localStoreLogger)
);

export default createStore;