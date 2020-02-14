import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
} from 'react-bootstrap';

import Layout from '../components/layout';


const CartProductList = ({ productsList, dispatch }) => {  
  const totalCost = productsList.reduce((res, item) => res += item.cost, 0);
  
  return (
    <>
      <Badge variant="light" pill >{ productsList.length }</Badge> <Badge variant="warning" pill >всего: { totalCost } BYN</Badge>
    </>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartProductList);