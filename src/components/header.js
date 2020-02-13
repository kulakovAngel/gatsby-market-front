import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              childs {
                title
                slug
              }
              parents {
                id
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{ title }</h1>
        <nav>
          <Nav>
            <Nav.Item><Link to='/'>Home</Link></Nav.Item>
            {
              data.allStrapiCategories.edges.map(category => {
                if (category.node.childs.length) {
                  return (
                    <NavDropdown title={ category.node.title }>
                      <Link to={`/${ category.node.slug }`}>{ category.node.title }</Link>
                      <NavDropdown.Divider />
                        {
                          category.node.childs.map((sub, i) => (
                            <Nav.Item>
                              <Link to={`/${ category.node.slug }/${ sub.slug }`}>{ sub.title }</Link>
                            </Nav.Item>
                          ))
                        }
                    </NavDropdown>
                  )
                } else if (!category.node.parents.length) {
                  return (
                    <Nav.Item>
                      <Link to={`/${ category.node.slug }`}>{ category.node.title }</Link>
                    </Nav.Item>
                  )
                }
              })
            }
            <Nav.Item><Link to='/about'>About</Link></Nav.Item>
            <Nav.Item><Link to='/cart'>Cart</Link></Nav.Item>
          </Nav>
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