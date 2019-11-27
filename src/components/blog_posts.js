import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const blogPostsQuery = graphql`
  query blogPosts {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            description
            thumbnail
            path
          }
        }
      }
    }
  }
`;

const BlogPosts = () => (
  <>
    <StaticQuery
      query={blogPostsQuery}
      render={data => {
        const { edges: posts } = data.allMdx;
        return (
          <Flex>
            {posts.sort((a, b) => new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date) ? -1 : 1).map((post, index) => {
              const { title, date, description, thumbnail, path } = post.node.frontmatter;
              const maxWidth = index === 0 ? '50%' : '300px';
              const margin = index === 0 ? '0 1rem 1rem 0' : '0 1rem 0 0';
              return (
                <Post href={`/blog/${path}`}>
                  <img src={thumbnail} alt="" style={{margin, marginRight: '1rem', maxWidth}}/>
                  <div>
                    <h3 style={{margin: '.5em 0'}}>{title}</h3>
                    <p style={{marginBottom: '.5em'}}>{new Date(date).toLocaleDateString()}</p>
                    <p>{description}</p>
                  </div>
                </Post>
              )
            })}
          </Flex>
        )
      }}
    />
  </>
);

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -20px;
`;
const Post = styled.a`
  display: flex;
  flex: 1;
  padding: 0 20px;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  box-shadow: none;
`;

export default BlogPosts;