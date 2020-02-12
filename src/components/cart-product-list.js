import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/layout';


const CartProductList = ({ productsList, dispatch }) => {
  function emptyCart() {
    dispatch({
      type: 'EMPTY_CART',
    });
  }
  
  function removeItem(e) {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: e.target.dataset.listItem,
    });
  }
  
  const totalCost = productsList.reduce((res, item) => res += item.cost, 0);
  
  return (
    <>
      <p>Товаров в корзине: { productsList.length } (на { totalCost } BYN)</p>
      <ul>
        {
          productsList.map(product => (
            <li>{ product.title }  ({ product.cost } BYN)<span onClick={ removeItem } data-list-item={ product.id }>&times;</span></li>
          ))
        }
      </ul>
      <button onClick={ emptyCart }>Очистить корзину</button>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartProductList);