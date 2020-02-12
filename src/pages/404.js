import React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout
    seo={{
      title: 'Page not found',
      description: 'Page not found',
      keywords: 'Page, not, found',
  }}>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;