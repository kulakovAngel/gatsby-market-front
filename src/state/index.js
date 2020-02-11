import { createStore as reduxCreateStore } from 'redux';

const reducer = (state=[], action) => {
    if (action.type === 'ADD_TO_CART') {
        const [ ...newState ] = state;
        newState.push(action.payload);
        console.log(newState);
        return newState;
    }
    return state;
}

const initialState = [];

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore