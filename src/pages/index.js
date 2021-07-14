import * as React from "react"
import { graphql } from "gatsby";
import { HomeContainer } from "../containers";

const IndexPage = () => {
  return (
    <HomeContainer />
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          name
          thumbnail
          originPrice
          discountPrice
        }
      }
    }
  }
`;

export default IndexPage
