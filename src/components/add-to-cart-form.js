import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from 'react-bootstrap';


const AddToCartForm = ({ productsList, title, cost, id, dispatch }) => {
  function addToCart() {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        title,
        cost,
        id,
      }
    });
  }
  return (
    <Button size='lg' onClick={ addToCart }>Добавить в корзину!</Button>
  );
};

export default connect()(AddToCartForm);