import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout
    seo={{
      title: 'About',
      description: 'About Market',
      keywords: 'About, Market',
  }}>
    <p>Welcome to page 'About'</p>
  </Layout>
);

export default AboutPage;