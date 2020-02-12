import React from 'react';
import { connect } from 'react-redux';
import { Link, graphql } from 'gatsby';

const CartComponent = ({ productsList, dispatch }) => {
  function emptyCart() {
    dispatch({
      type: 'EMPTY_CART',
    });
  }
  
  const totalCost = productsList.reduce((res, item) => res += item.cost, 0)
  
  return (
    <div style={{border: '1px solid red'}}>
      <p>Товаров в корзине: { productsList.length } (на { totalCost } BYN)</p>
      <ul>
        {
          productsList.map(product => (
            <li>{ product.title }  ({ product.cost } BYN)</li>
          ))
        }
      </ul>
      <button onClick={ emptyCart }>Очистить корзину</button>
    </div>
  );
};

const mapStateToProps = state => ({
  productsList: state,
});

export default connect(mapStateToProps)(CartComponent);