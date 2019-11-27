import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import logo from "../images/disney_toolkit_logo.png";
import BlogPosts from "../components/blog_posts";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Disney Toolkit"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `disney`, `world`, `disneyland`, 'tips', 'tricks', 'games']}
        />
        <BlogPosts />
        <div style={{textAlign: 'center'}}>
          <Link to="/blog/">
            <Button marginTop="35px" background="linear-gradient(135deg, #00bfbc 0%,#7db9e8 100%)">More Blog Posts</Button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
