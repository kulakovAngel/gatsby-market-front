import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout
    seo={{
      title: 'О магазине',
      description: 'About Market',
      keywords: 'About, Market',
  }}>
    <Row className="my-5">
      <Col>
        <p>Welcome to page 'About'</p>
      </Col>
    </Row>
  </Layout>
);

export default AboutPage;