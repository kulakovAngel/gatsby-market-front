import React from 'react';
import Helmet from 'react-helmet';
import {
  Container,
  Row,
  Col,
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
      <Row className='my-4'>
        <Col className='d-flex justify-content-center'>
          ©CoolSoft, { new Date().getFullYear() }
        </Col>
        <Col className='d-flex justify-content-center'>
          <section>
            <h5>Bakery Market</h5>
            <p>Belarus,<br />
              Hrodno</p>
          </section>
        </Col>
      </Row>
    </Container>
  </>
);
export default Layout;