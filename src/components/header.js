import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  Nav,
  NavDropdown,
  Navbar,
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
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
      <Card>
        <Container fluid>
          <Row>
            <Col xs={ 10 }>
              <Card.Title as='h1'>{ title }</Card.Title>
                <nav>
                  <Nav as='ul'>
                    <Nav.Item as='li'><Nav.Link as={ Link } to='/'>Home</Nav.Link></Nav.Item>
                    {
                      data.allStrapiCategories.edges.map(category => {
                        if (category.node.childs.length) {
                          return (
                            <NavDropdown as='li' title={ category.node.title }>
                              <Nav.Link as={ Link } to={`/${ category.node.slug }`}>{ category.node.title }</Nav.Link>
                              <NavDropdown.Divider />
                                {
                                  category.node.childs.map((sub, i) => (
                                    <Nav.Item>
                                      <Nav.Link as={ Link } to={`/${ category.node.slug }/${ sub.slug }`}>{ sub.title }</Nav.Link>
                                    </Nav.Item>
                                  ))
                                }
                            </NavDropdown>
                          )
                        } else if (!category.node.parents.length) {
                          return (
                            <Nav.Item as='li'>
                              <Nav.Link as={ Link } to={`/${ category.node.slug }`}>{ category.node.title }</Nav.Link>
                            </Nav.Item>
                          )
                        }
                      })
                    }
                    <Nav.Item as='li'><Nav.Link as={ Link } to='/about'>About</Nav.Link></Nav.Item>
                    <Nav.Item as='li'><Nav.Link as={ Link } to='/cart'>Cart</Nav.Link></Nav.Item>
                  </Nav>
                </nav>
            </Col>
            <Col>
              <CartComponent />
            </Col>
          </Row>
        </Container>
      </Card>
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