import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Row,
  Col,
  Card,
  Badge,
} from 'react-bootstrap';

import Layout from '../components/layout';
import ProductItem from "../components/product-item";


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
    {
      data.strapiCategories.childs &&
      <Row className="my-5">
        {
          data.strapiCategories.childs.map(sub => (
            <Col key={ sub.id }>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/${ data.strapiCategories.slug }/${ sub.slug }`}>
                      { sub.title }
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    { `${sub.description.slice(0, 150)}...` }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    }
    {
      data.allStrapiProducts.edges.length &&
      <Row className="my-5">
        {
          data.allStrapiProducts.edges.map(product => (
            <Col key={ product.id } sm={ 12 } md={ 4 } xl={ 3 }>
              <ProductItem { ...product } category_slug={ data.strapiCategories.parents.length ? `${data.strapiCategories.parents[0].slug}/${data.strapiCategories.slug}` : data.strapiCategories.slug }/>
            </Col>
          ))
        }
      </Row>
    }
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
    allStrapiCategories {
      edges {
        node {
          id
          title
          description
          slug
          childs {
            id
            slug
            title
            description
          }
        }
      }
    }
  }
`;