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
import AddToCartForm from '../components/add-to-cart-form';

const ProductTemplate = ({ data }) => (
  <Layout
    seo={{
      title: data.strapiProducts.title,
      description: data.strapiProducts.description,
  }}>
    <Row className="my-5">
      <Col>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title as='h3'>Описание:</Card.Title>
              <Card.Text>
                { data.strapiProducts.description }
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
            <h3>Характеристики:</h3>
            Стоимость: { data.strapiProducts.cost } BYN
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Метки:</h3>
            {
              data.strapiProducts.categories.map(tag => (
                <Badge variant="info">
                  <Link to={`/${tag.slug}`}>
                    { tag.title }
                  </Link>
                </Badge>
              ))
            }
          </Col>
        </Row>
      </Col>
      <Col sm={ 12 } md={ 6 } xl={ 8 }>
        <Img fluid={ data.strapiProducts.image.childImageSharp.fluid } />
      </Col>
    </Row>
    <Row className="my-5">
      <Col className="d-flex justify-content-end">
        <AddToCartForm { ...data.strapiProducts } />
      </Col>
    </Row>
  </Layout>
)

export default ProductTemplate;

export const pageQuery = graphql`  
  query ProductTemplate($id: String!) {
    strapiProducts(id: {eq: $id}) {
      id
      title
      cost
      description
      slug
      categories {
        title
        slug
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;