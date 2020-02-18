import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Logo = ({ size }) => {
  const data = useStaticQuery(graphql`
    query {
      logotype: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={ data.logotype.childImageSharp.fixed } />
}

export default Logo;