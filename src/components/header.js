import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, data }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <nav>
         {console.log('data: ', data)}
          <ul>
            {
              data.allStrapiCategories.edges.map(category => (
                <li><Link to='/'>{category.node.id}</Link></li>
              ))
            }
            <li><Link to='/'>{siteTitle}</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;


export const pageQuery = graphql`  
  query Header {
    allStrapiCategories {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`;