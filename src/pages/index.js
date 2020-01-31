import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Market</h1>
    <ul>
      {
        data.allStrapiProducts.edges.map(product => (
          <li key={ product.node.id }>
            <article>
              <Link to={`/${product.node.id}`}><h2>{ product.node.title }</h2></Link>
              <Img fixed={ product.node.image.childImageSharp.fixed } />
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
          image_name
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