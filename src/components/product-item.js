import { Link } from "gatsby";
import React from "react";
import Img from 'gatsby-image';
import {
  Card,
} from 'react-bootstrap';

const ProductItem = ({
  id,
  title,
  cost,
  image,
  slug,
  category_slug,
}) => (
  <Link to={`/${ category_slug }/${ slug }`}>
    <Card>
      <Card.Img variant="top" as={ Img } fluid={ image.childImageSharp.fluid } />
      <Card.Body>
        <Card.Title as='h3'>{ title }</Card.Title>
        <Card.Text>
          { cost } BYN
        </Card.Text>
      </Card.Body>
    </Card>
  </Link>
)

export default ProductItem;