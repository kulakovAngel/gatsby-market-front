import React from 'react';
import { connect } from 'react-redux';
import { Link, graphql } from 'gatsby';


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
    <div>
      <button onClick={ addToCart }>Добавить в корзину!</button>
    </div>
  );
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(AddToCartForm);