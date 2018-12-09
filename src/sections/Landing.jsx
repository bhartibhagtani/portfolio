import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Label } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
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
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
              <Heading
                textAlign="center"
                is="h1"
                color="primary"
                fontSize={[5, 6, 8]}
                mb={[3, 4, 5]}
              >
                {`Hello, I'm ${name}!`}
              </Heading>
              <TextLoop>
                {roles.map(text => (
                  <Heading
                    css={{
                    width:'100vw'
                  }}
                    key={text}
                    is="h2"
                    color="primary"
                    textAlign="center"
                    mb={[4, 4]}
                  >
                    {text}
                  </Heading>
                ))}
              </TextLoop>
              <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                {socialLinks.map(({ id, ...rest }) => (
                  <Label mx={3} fontSize={[5, 6, 6]} key={id}>
                    <SocialLink
                      color="primary"
                      hoverColor="secondary"
                      {...rest}
                    />
                  </Label>
              ))}
              </Flex>
            </Flex>
            <MouseIcon />
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
