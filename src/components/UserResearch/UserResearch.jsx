import React from 'react'
import { Box, Text } from 'rebass';
import Section from "../Section";
import TriangleSmall from "../Triangle/TriangleSmall";

const UserResearch = () => (
  <Section.Container id="Discover" Background={TriangleSmall}>
    <Section.Header name="User Research" icon="🔍" label="plan" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text lineHeight="1.6" fontSize={[ 3 ]}>
        <p>
          {
          `
            User research studies of four banks were conducted to understand users’ current
            relations with their bank, their perception of online banking services and
            to offer recommendations for more customer-focused services. 
            We specifically investigated: Dashboard and Apply for Credit Card feature
          `
        }
        </p>
        <p>
          <Text fontWeight="bold">
          User Base
          </Text>
          <ul>
            <Box mb={3}>
              <li>
                <span style={{
                fontWeight: 'bold'
              }}
                >
                Demographics - 
                  {' '}
                </span>
              Includes wide variety and large numbers of users from cities and developed towns who are online banking customers
              </li>
            </Box>
            <Box mb={3}>
              <li>
                <span style={{
                fontWeight: 'bold'
              }}
                >
                Age - 
                  {' '}
                </span>
              18-60 years
              </li>
            </Box>
            <Box mb={3}>
              <li>
                <span style={{
                fontWeight: 'bold'
              }}
                >
                Psychographics - 
                  {' '}
                </span>
              The users view goes beyond the novelty of online banking. They expect their experience to be similar to what they get at a service counter. Some users have concerns about the security of their banking information is not fully addressed.
              </li>
            </Box>
            <Box mb={3}>
              <li>
                <span style={{
                fontWeight: 'bold'
              }}
                >
                Knowledge Level -
                  {' '}
                </span>
              Most of the users are educated and have the basic knowledge of online banking.
              </li>
            </Box>
            <Box mb={3}>
              <li>
                <span style={{
                fontWeight: 'bold'
              }}
                >
                Technical Orientation - 
                  {' '}
                  {' '}
                </span>
              Mostly all are aware of technology and use mobile apps.
              </li>
            </Box>
          </ul>
        </p>
      </Text>
    </Box>
  </Section.Container>
)

export default UserResearch