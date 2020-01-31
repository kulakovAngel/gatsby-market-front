import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout
    seo={{
      description: 'About Market',
      keywords: 'About, Market',
  }}>
    <h1>Page About</h1>
    <p>Welcome to page 'About'</p>
  </Layout>
);

export default AboutPage;