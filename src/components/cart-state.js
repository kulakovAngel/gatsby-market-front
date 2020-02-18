import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
} from 'react-bootstrap';


const CartProductList = ({ productsList, dispatch }) => {
  const totalCost = productsList.reduce((res, item) => res += (item.cost * item.amount), 0);
  const totalAmount = productsList.reduce((res, item) => res += item.amount, 0);
  
  return (
    <>
      <Badge variant='info' pill >{ totalAmount }</Badge>
      <Badge variant='warning' pill >всего: { totalCost } BYN</Badge>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartProductList);