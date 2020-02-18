import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Button,
  Alert,
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
      strEncoded += 'order=' + encodeURIComponent(data[key].map(item => `${item.title}: ${item.cost} BYN * ${item.amount}`).join(`\n`));
    } else {
      strEncoded += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
  }
  return strEncoded;
}


const CartPage = ({ productsList, dispatch }) => {
  const [alert, setAlert] = useState({ type: false, message: '' });
  
  function order(e) {
    e.preventDefault();
    
    if (!e.target.elements['name'].value || !e.target.elements['phone'].value) {
      setAlert({type: 'danger', message: 'Введите свои данные!'});
      return;
    }
    if (!productsList.length) {
      setAlert({type: 'danger', message: 'Корзина пуста!'});
      return;
    }
    
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
      .then(() => {
        setAlert({type: 'success', message: 'Ваша заявка успешно отправлена!'});
        dispatch({
          type: 'EMPTY_CART',
        });
      })
      .catch(error => setAlert({type: 'danger', message: 'Ошибка сервера. Попробуйте еще раз или обратитесь в техподдкржку!'}))
  }
  
  return (
    <Layout
      seo={{
        title: 'Корзина',
        description: 'Оформление, покупки',
    }}>
      {
        alert &&
        <Row>
          <Col>
            <Alert variant={ alert.type } dismissible onClose={() => setAlert(false)}>
              { alert.message }
            </Alert>
          </Col>
        </Row>
      }
      <Row>
        <Col xl={ 6 } className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Детализация</Card.Title>
              <CartProductList productsList={ productsList } />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={ 6 } className='mt-5'>
          <Card>
            <Card.Body>
              <Card.Title>Ваши данные</Card.Title>
                <Form onSubmit={ order } name='order' method='POST' data-netlify='true'>
                  <Form.Group>
                    <Form.Control type='text' placeholder='Ваше имя*' name='name' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type='text' placeholder='Ваш телефон*' name='phone' />
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