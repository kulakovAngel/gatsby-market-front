import React from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  Badge,
  Button,
} from 'react-bootstrap';


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
  
  const totalCost = productsList.reduce((res, item) => res += (item.cost * item.amount), 0);
  const totalAmount = productsList.reduce((res, item) => res += item.amount, 0);
  
  return (
    <>
      <ListGroup style={{ minWidth: '300px', zIndex: '9' }}>
        {
          productsList.map(product => (
            <ListGroup.Item action variant="success" key={ product.id }>
              <Badge pill variant='primary'>{ product.title }</Badge> &times; <Badge pill variant={product.amount > 1 ? 'danger' : 'success'}>{ product.amount }</Badge> = <Badge pill variant='dark'>{ product.cost * product.amount } BYN</Badge>
              <button type='button' className='close' aria-label='Close' variant='danger' onClick={ removeItem } data-list-item={ product.id }>
                <span aria-hidden='true'>&times;</span>
              </button>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <p>Всего в корзине: <b>{ totalAmount }</b> товаров на <b>{ totalCost } BYN</b></p>
      <Button onClick={ emptyCart }>Очистить корзину</Button>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartProductList);