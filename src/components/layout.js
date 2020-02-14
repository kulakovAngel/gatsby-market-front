import React from 'react';
import Helmet from 'react-helmet';
import {
  Container,
  Card,
} from 'react-bootstrap';

import Header from './header';
import './layout.css';


const Layout = ({ seo = {}, children }) => (
  <>
    <Helmet>
      <title>{ `Gatsby Market${seo.title ? ' - ' + seo.title : ''}` }</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
    </Helmet>
    <Header title={ seo.title ? seo.title : 'Gatsby Market' } />
    <Container as='main'>{ children }</Container>
    <Container as='footer' fluid className='bg-dark text-light'>
      © { new Date().getFullYear() }
    </Container>
  </>
);
export default Layout;