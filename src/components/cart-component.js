import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import {
  Button,
  Collapse,
  Card,
} from 'react-bootstrap';

import CartState from '../components/cart-state';
import CartProductList from '../components/cart-product-list';


const CartComponent = ({ productsList }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        variant="success"
      >
        Корзина <CartState />
      </Button>
      <Collapse in={ open } style={{ position: 'fixed', zIndex: '9' }}>
        <Card>
          <CartProductList productsList={ productsList } />
          <Link to='cart'>Оформить покупку</Link>
        </Card>
      </Collapse>
      
      
    </>
  );
};

export default CartComponent;