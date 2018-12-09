import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box, Label } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SocialLink from "./SocialLink";

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <Text
        mb={2}
        pb={1}
        css={{
          textTransform: 'uppercase',
          display: 'table',
        }}
      >
        I’m on the lookout for an exciting new opportunity.
      </Text>
      <Text
        mt={1}
        mb={2}
        pb={1}
      >
        Hit me up if you have something, or want to collaborate on a project, or just want to say Hi! 
        {' '}
        <span role="img" aria-label="wave">👋🏻</span>
      </Text>
      <StaticQuery
        query={graphql`
        query footerSocialLinks {
          contentfulAbout {
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
        render={data => {
        const { socialLinks } = data.contentfulAbout;

        return (
          <Flex mt={4} mb={4} alignItems="center" justifyContent="center">
            {socialLinks.map(({ id, ...rest }) => (
              <Label mx={3} fontSize={[4, 4, 4]} key={id}>
                <SocialLink
                  color="secondary"
                  hoverColor="secondaryLight"
                  {...rest}
                />
              </Label>
            ))}
          </Flex>
          )
        }}
      />
    </Fade>
  </FooterContainer>
);

export default Footer;
