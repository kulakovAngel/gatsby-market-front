import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  ButtonGroup,
  Button,
  Collapse,
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import CartState from '../components/cart-state';
import CartProductList from '../components/cart-product-list';


const CartComponent = ({ productsList }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <ButtonGroup>
        <Button variant='outline-primary' as={ Link } to='/cart'>
          Корзина <CartState />
        </Button>
        <Button
          onClick={() => setOpen(!open)}
          aria-expanded={ open }
          variant='primary'>
          { open ? '▲' : '▼' }
        </Button>
      </ButtonGroup>
      <Collapse in={ open } style={{ position: 'absolute', right: '0', zIndex: '9' }}>
        <Card>
          <Container>
            <Row>
              <Col className='my-3'>
                <CartProductList productsList={ productsList } />
              </Col>
            </Row>
          </Container>
        </Card>
      </Collapse>
    </div>
  );
};

export default CartComponent;