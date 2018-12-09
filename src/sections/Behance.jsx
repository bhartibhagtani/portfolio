
import React from 'react'
import { Box, Text } from 'rebass';
import Triangle from '../components/Triangle/Triangle';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const Behance = () => (
  <Section.Container id="Behance" Background={Background}>
    <Section.Header name="Behance" icon="" label="behance" />
    <Box mt="50px" mb="300px">
      <Text fontSize={[5]}>
        {
          `Thanks! You've made it till the end 🙂.
          View this enire project on `
        }
        <SocialLink
          name="Behance"
          color="primary"
          hoverColor="secondary"
          fontAwesomeIcon="behance" 
          url="https://www.behance.net/gallery/73501809/Axis-Mobile-Redesign-DashboardCredit-Card-Application"
        />
      </Text>
    </Box>
  </Section.Container>
)


export default Behance;
