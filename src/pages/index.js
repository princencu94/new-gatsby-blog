import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from 'styled-components';

const BlogLink = style(Link)`
  text-decoration:none;
`;

const BlogTitle = style.h3`
  margin-bottom:20px;
  color:blue;
`;

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Princes Posts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
              <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
                </BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
             
          </div>
        ))
      }
    </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query { 
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }
        html
        fields {
          slug
        }
        excerpt
      }
    }
    totalCount
  }
}
`;