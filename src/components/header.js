import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  Nav,
  NavDropdown,
  Navbar,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartComponent from '../components/cart-component';
import Logo from './logo';

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
      <>
        <Navbar as='nav' expand='sm' sticky='top' bg="dark" variant="dark">
          <Navbar.Brand as={ Link } to='/'><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto align-items-end" >
              <Nav.Link as={ Link } to='/'>Главная</Nav.Link>
                {
                  data.allStrapiCategories.edges.map(category => {
                    if (category.node.childs.length) {
                      return (
                        <NavDropdown key={ category.node.id } title={ category.node.title }>
                          <NavDropdown.Item as={ Link } to={`/${ category.node.slug }`}>{ category.node.title }</NavDropdown.Item>
                          <NavDropdown.Divider />
                            {
                              category.node.childs.map(sub => (
                                <NavDropdown.Item key={ sub.slug } as={ Link } to={`/${ category.node.slug }/${ sub.slug }`}>
                                  { sub.title }
                                </NavDropdown.Item>
                              ))
                            }
                        </NavDropdown>
                      )
                    } else if (!category.node.parents.length) {
                      return (
                        <Nav.Link as={ Link } key={ category.node.id } to={`/${ category.node.slug }`}>
                          { category.node.title }
                        </Nav.Link>
                      )
                    }
                  })
                }
              <Nav.Link as={ Link } to='/about'>О нас</Nav.Link>
              <CartComponent />
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
        <Card>
          <Card.Title as='h1'>{ title }</Card.Title>
        </Card>
      </>
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