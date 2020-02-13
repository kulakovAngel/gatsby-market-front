import React from 'react';
import Helmet from 'react-helmet';
//import styled, { createGlobalStyle } from "styled-components";

import Header from './header';
//import { STYLE } from './../consts';

const Layout = ({ seo = {}, children }) => (
  <>
    <Helmet>
      <title>{ `Gatsby Market${seo.title ? ' - ' + seo.title : ''}` }</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
    </Helmet>
    <Header title={ seo.title ? seo.title : 'Gatsby Market' } />
    <main>{ children }</main>
    <footer>
      © { new Date().getFullYear() }
    </footer>
  </>
);

export default Layout;

//<GlobalStyle />