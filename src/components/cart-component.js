import React from 'react';
import { Link, graphql } from 'gatsby';

import CartProductList from '../components/cart-product-list';


const CartComponent = ({ productsList }) => {
  return (
    <div style={{border: '1px solid red'}}>
      <CartProductList productsList={ productsList } />
      <Link to='cart'>Оформить покупку</Link>
    </div>
  );
};

export default CartComponent;