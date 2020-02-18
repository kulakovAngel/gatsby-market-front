import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout
    seo={{
      title: 'Page not found',
      description: 'Page not found',
      keywords: 'Page, not, found',
  }}>
    <Row className="my-5">
      <Col>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Col>
    </Row>
  </Layout>
);

export default NotFoundPage;