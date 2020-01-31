import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

//https://www.gatsbyjs.org/docs/static-query/
//https://www.gatsbyjs.org/docs/use-static-query/

const Header = () => (
  <StaticQuery
    query={graphql`
      query CategoriesQuery {
        allStrapiCategories {
          edges {
            node {
              id
              title
              description
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{ data.site.siteMetadata.title }</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {
              data.allStrapiCategories.edges.map(category => (
                <li><Link to={`/${category.node.id}`}>{category.node.title}</Link></li>
              ))
            }
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
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