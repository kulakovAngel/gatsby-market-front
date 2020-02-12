import React from 'react';
import { connect } from 'react-redux';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import AddToCartForm from '../components/add-to-cart-form';

const ProductTemplate = ({ data }) => (
  <Layout>
    <h1>{ data.strapiProducts.title }</h1>
    { data.strapiProducts.description }
    { data.strapiProducts.cost }
    <Img fixed={ data.strapiProducts.image.childImageSharp.fixed } />
    {
      data.strapiProducts.categories.map(tag => (
        <Link to={`/${tag.title}`}>{ tag.title }</Link>
      ))
    }
    <button>В корзину!</button>
    <AddToCartForm { ...data.strapiProducts } />
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
      categories {
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
`;