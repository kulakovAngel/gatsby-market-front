import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image'


const CategoryTemplate = ({ data }) => (
  <Layout>
    <h1>{ data.strapiCategories.title }</h1>
    { data.strapiCategories.description }
    { data.strapiCategories.cost }
    {
      data.strapiCategories.products.map(product => (
        <ul>
          <li>
            <Link to={`/${data.strapiCategories.title}/${product.title}`}><h2>{ product.title }</h2></Link>
            <p>{ product.description }</p>
          </li>
        </ul>
      ))
    }
  </Layout>
)

export default CategoryTemplate;

export const pageQuery = graphql`  
  query CategoryTemplate($id: String!) {
    strapiCategories(id: {eq: $id}) {
      id
      title
      description
      products {
        title
        description
      }
    }
  }
`;