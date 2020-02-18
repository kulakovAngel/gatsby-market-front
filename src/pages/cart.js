import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import Layout from '../components/layout';
import CartProductList from '../components/cart-product-list';


const encode = data => {
  let strEncoded = '';
  for (let key in data) {
    if (key === 'items' ) {
      strEncoded += 'order=' + encodeURIComponent(data[key].map(item => `${item.title} (${item.cost} BYN)`).join(`\n`));
    } else {
      strEncoded += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
  }
  return strEncoded;
}


const CartPage = ({ productsList, dispatch }) => {
  
  function order(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        'form-name': 'order',
        name: e.target.elements['name'].value,
        phone: e.target.elements['phone'].value,
        items: productsList,
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }
  
  return (
    <Layout
      seo={{
        title: 'Корзина',
        description: 'Оформление, покупки',
    }}>
      <Row>
        <Col xl={ 6 } className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Детализация</Card.Title>
              <CartProductList productsList={ productsList } dispatch={ dispatch } />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={ 6 } className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Ваши данные</Card.Title>
                <Form onSubmit={ order } name='order' method='POST' data-netlify='true'>
                  <Form.Group>
                    <Form.Control type='text' placeholder='Ваше имя' name='name' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type='text' placeholder='Ваш телефон' name='phone' />
                  </Form.Group>
                  <Form.Control type='hidden' name='order' />
                  <Button variant='primary' type='submit'>
                    Оформить покупку
                  </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartPage);