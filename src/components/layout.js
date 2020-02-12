import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
//import styled, { createGlobalStyle } from "styled-components";

import Header from './header';
//import { STYLE } from './../consts';






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
  </>
);

export default Layout;

//<GlobalStyle />