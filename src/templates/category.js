import React from "react"
import { Link, graphql } from "gatsby"
import {
  Row,
  Col,
  Card,
  Badge,
} from 'react-bootstrap';

import Layout from "../components/layout"
import ProductItem from "../components/product-item";


const CategoryTemplate = ({ data }) => (
  <Layout
    seo={{
      title: data.strapiCategories.title,
      description: data.strapiCategories.description,
  }}>
    <Row className="my-5">
      <Col>
        <Row>
          { data.strapiCategories.description }
        </Row>
      </Col>
    </Row>
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
      data.strapiCategories.products &&
      <Row className="my-5">
        {
          data.strapiCategories.products.map(product => (
            <Col key={ product.id } sm={ 12 } md={ 4 } xl={ 3 }>
              <ProductItem { ...product } category_slug={ data.strapiCategories.parents.length ? `${data.strapiCategories.parents[0].slug}/${data.strapiCategories.slug}` : data.strapiCategories.slug }/>
            </Col>
          ))
        }
      </Row>
    }
  </Layout>
)

export default CategoryTemplate;

export const pageQuery = graphql`  
  query CategoryTemplate($id: String!) {
    strapiCategories(id: {eq: $id}) {
      id
      slug
      title
      description
      childs {
        id
        slug
        title
        description
      }
      parents {
        title
        slug
      }
      products {
        id
        title
        description
        cost
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;