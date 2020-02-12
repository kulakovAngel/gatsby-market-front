import React from 'react';
import { connect } from 'react-redux';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import AddToCartForm from '../components/add-to-cart-form';

const ProductTemplate = ({ data }) => (
  <Layout
    seo={{
      title: data.strapiProducts.title,
      description: data.strapiProducts.description,
  }}>
    { data.strapiProducts.description }
    { data.strapiProducts.cost }
    <Img fixed={ data.strapiProducts.image.childImageSharp.fixed } />
    {
      data.strapiProducts.categories.map(tag => (
        <Link to={`/${tag.slug}`}>{ tag.title }</Link>
      ))
    }
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
      slug
      categories {
        title
        slug
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