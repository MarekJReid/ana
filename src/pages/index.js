import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Intro from 'components/page-components/landing/intro';
import Services from 'components/page-components/landing/services/services';
import { graphql } from 'gatsby';
import Hero from 'containers/hero';

const Index = ({ data }) => {
  return (
          <Layout>
            <Hero image="https://source.unsplash.com/I2YSmEUAgDY/1600x900"/>
            <div style={{ height: '20vh' }} />
            <Intro galleryItems={data.homeJson.gallery}/>
            <Services/>
          </Layout>
)};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }`