/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getProducts = makeRequest(graphql, `
    {
      allStrapiProducts {
        edges {
          node {
            id
            title
            categories {
              title
              id
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each product.
    result.data.allStrapiProducts.edges.forEach(({ node }) => {
//      if (node.categories[0].title === 'fresh bakery')
        for(let i=0; i<node.categories.length; i++) {
          createPage({
            path: `/${node.categories[i].title}/${node.title}`,
            component: path.resolve(`src/templates/product.js`),
            context: {
              id: node.id,
            },
          })
        }
    })
  });
  
  const getCategories = makeRequest(graphql, `
    {
      allStrapiCategories {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each category.
    result.data.allStrapiCategories.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.title}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  // Query for products nodes to use in creating pages.
  return Promise.all([getProducts, getCategories]);
};