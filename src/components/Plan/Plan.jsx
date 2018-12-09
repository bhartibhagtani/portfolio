import React from 'react'
import { Box, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';

const Plan = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="The Plan" icon="📓" label="plan" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text lineHeight="1.8" fontSize={[ 4 ]}>
        <p>
          {
            `
              The banking dashboard is used by about 18% of
              people everyday yet no one mentions about the 
              pleasant digital experience. 
            `
          }
        </p>
        <p>
          {
            `
              The goal here is to increase the usability and appeal of the
              dashboard & credit card application features of axis's mobile 
              application, which will increase its standing against the competitors.
              To bring a user centered solution for making the banking experience 
              of users happy.
            `
          }
        </p>
      </Text>
    </Box>
  </Section.Container>
)

export default Plan