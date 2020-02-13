import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ProductItem from "../components/product-item";


const CategoryTemplate = ({ data }) => (
  <Layout
    seo={{
      title: data.strapiCategories.title,
      description: data.strapiCategories.description,
  }}>
    { data.strapiCategories.description }
    {
      data.strapiCategories.childs &&
      <ul>
        {
          data.strapiCategories.childs.map(sub => (
            <li key={ sub.id }>
              <Link to={`/${ data.strapiCategories.slug }/${ sub.slug }`}>
                <h3>{ sub.title }</h3>
              </Link>
            </li>
          ))
        }
      </ul>
    }
    <ul>
      {
        data.strapiCategories.products.map(product => (
          <li key={ product.id }>
            <ProductItem { ...product } category_slug={ data.strapiCategories.parents.length ? `${data.strapiCategories.parents[0].slug}/${data.strapiCategories.slug}` : data.strapiCategories.slug }/>
          </li>
        ))
      }
    </ul>
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
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;