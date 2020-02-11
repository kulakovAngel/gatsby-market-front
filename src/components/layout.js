import React from 'react';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
//import styled, { createGlobalStyle } from "styled-components";

import Header from './header';
//import { STYLE } from './../consts';

const Counter = (l,{ addToCart }) => (
  <div>
   {console.log('l',l)}
    <p>Count: </p>
    <button onClick={addToCart}>addToCart</button>
  </div>
)

const mapStateToProps = (length) => {
  return length
}

const mapDispatchToProps = dispatch => {
  return { addToCart: () => dispatch({ type: `ADD_TO_CART`, payload: '10' }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)




const Layout = ({ seo = {}, children }) => (
  <>
    <Helmet>
      <title>{ `Houses for sale${seo.title ? ' - ' + seo.title : ''}` }</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
    </Helmet>
    <Header />
    <main>{ children }</main>
    <footer>
      © { new Date().getFullYear() }
      <div>{`https://strapi.io/blog/building-a-static-website-using-gatsby-and-strapi/`}</div>
    </footer>
    <ConnectedCounter />
  </>
);

export default Layout;

//<GlobalStyle />