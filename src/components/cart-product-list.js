import React from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  Badge,
  Button,
} from 'react-bootstrap';

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
      <ListGroup>
        {
          productsList.map(product => (
            <ListGroup.Item action variant="success">{ product.title }  ({ product.cost } BYN) <Badge variant="danger" onClick={ removeItem } data-list-item={ product.id }>&times;</Badge></ListGroup.Item>
          ))
        }
      </ListGroup>
      <Button onClick={ emptyCart }>Очистить корзину</Button>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartProductList);