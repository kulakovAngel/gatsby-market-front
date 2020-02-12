import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout
    seo={{
      description: 'React Market',
      keywords: 'React, Market',
  }}>
    <ul>
      {
        data.allStrapiProducts.edges.map(product => (
          <li key={ product.node.id }>
            <article>
              <Link to={`/${product.node.categories[0].slug}/${product.node.slug}`}><h2>{ product.node.title }</h2></Link>
              <Img fixed={ product.node.image.childImageSharp.fixed } />
              <p>{ product.node.categories.title }</p>
              {
                product.node.categories.map(item => (
                  <Link to={ item.slug } style={{border: '1px solid'}}>{item.title}</Link>
                ))
              }
            </article>
          </li>
        ))
      }
    </ul>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiProducts {
      edges {
        node {
          id
          title
          cost
          description
          slug
          categories {
            slug
            title
          }
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;