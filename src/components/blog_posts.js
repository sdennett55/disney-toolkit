import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Button from './button';

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
              return (
                <Post href={`/blog/${path}`}>
                  <Image src={thumbnail} alt="" />
                  <div>
                    <Header>{title}</Header>
                    <p style={{marginBottom: '.5em'}}>{new Date(date).toLocaleDateString()}</p>
                    <p>{description}</p>
                    <Button background="#3978af">Read More</Button>
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

const Header = styled.h3`
  font-family: Montserrat, sans-serif;
  color: #3978af;
  margin: .5em 0;

  @media (min-width: 900px) {
    margin-top: 0;
  }
`;

const Image = styled.img`
  margin-right: 0;
  @media (min-width: 900px) {
    margin-right: 1.5rem;
    max-width: 300px;
    &:first-child {
      max-width: 50%;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -20px;
`;
const Post = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  box-shadow: none;

  &:first-child {
    margin-top: 0;
  }
  &:hover,
  &:focus {
    ${Header} {
      text-decoration: underline;
    }
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default BlogPosts;
