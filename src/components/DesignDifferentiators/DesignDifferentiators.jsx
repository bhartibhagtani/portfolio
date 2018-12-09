
import React from 'react'
import { Box, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';

const DesignDifferentiators = () => (
  <Section.Container id="Dream" Background={TriangleSmall}>
    <Section.Header name="Design Differentiators" icon="💁🏻‍♂" label="designdifferentiators" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text lineHeight="2" fontSize={[ 4 ]}>
        <ol>
          <li>
            Improvise Dashboard Experience
          </li>
          <li>
            Biometric Login
          </li>
          <li>
            Hassle free paperless approval for credit card application
          </li>
        </ol>
      </Text>
    </Box>
  </Section.Container>
)

export default DesignDifferentiators