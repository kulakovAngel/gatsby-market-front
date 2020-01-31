import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image'


const ProductTemplate = ({ data }) => (
  <Layout>
    <h1>{ data.strapiProducts.title }</h1>
    { data.strapiProducts.description }
    { data.strapiProducts.cost }
    <Img fixed={ data.strapiProducts.image.childImageSharp.fixed } />
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