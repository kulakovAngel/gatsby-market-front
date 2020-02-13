import { Link } from "gatsby";
import React from "react";
import Img from 'gatsby-image';


const ProductItem = ({
  id,
  title,
  cost,
  image,
  slug,
  category_slug,
}) => (
  <Link to={`/${ category_slug }/${ slug }`}>
    <figure>
      <Img fixed={ image.childImageSharp.fixed } />
      <figcaption>
        <h3>{ title }</h3>
        <span>{ cost } BYN</span>
      </figcaption>
    </figure>
  </Link>
)

export default ProductItem;