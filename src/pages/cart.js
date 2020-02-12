import React from 'react';
import { connect } from 'react-redux';

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
    <Layout>
      <CartProductList productsList={ productsList } dispatch={ dispatch } />
      <form onSubmit={ order } name='order' method='POST' data-netlify='true'>
        <input placeholder='name' name='name' />
        <input placeholder='phone' name='phone' />
        <input type='hidden' name='order' />
        <input type='submit' value='Оформить покупку' />
      </form>
    </Layout>
  )
};

const mapStateToProps = state => ({
  productsList: state,
});
export default connect(mapStateToProps)(CartPage);