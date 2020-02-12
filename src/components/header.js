import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import CartComponent from '../components/cart-component';

const Header = ({ title }) => (
  <StaticQuery
    query={graphql`
      query CategoriesQuery {
        allStrapiCategories {
          edges {
            node {
              id
              title
              description
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{ title }</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {
              data.allStrapiCategories.edges.map(category => (
                <li><Link to={`/${category.node.slug}`}>{category.node.title}</Link></li>
              ))
            }
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
        <CartComponent />
      </header>
    )}
  />
);

export default Header;

//const Header = () => {
//  const data = useStaticQuery(graphql`
//    query CategoriesQuery {
//      allStrapiCategories {
//        edges {
//          node {
//            id
//            title
//            description
//          }
//        }
//      }
//      site {
//        siteMetadata {
//          title
//        }
//      }
//    }
//  `);
//  return (
//    <header>
//      <h1>{ data.site.siteMetadata.title }</h1>
//      <nav>
//        <ul>
//          {
//            data.allStrapiCategories.edges.map(category => (
//              <li><Link to={`/${category.node.id}`}>{category.node.title}</Link></li>
//            ))
//          }
//          <li><Link to='/about'>About</Link></li>
//        </ul>
//      </nav>
//    </header>
//  )
//};
//
//export default Header;