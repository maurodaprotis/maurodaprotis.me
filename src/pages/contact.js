import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import SectionTitle from '../components/SectionTitle';

const ContactPage = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Content>
        <SectionTitle>Contact</SectionTitle>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input name="name" type="text" placeholder="name" />
          <button type="submit">Send</button>
        </form>
      </Content>
    </Wrapper>
  </Layout>
);

export default ContactPage;
