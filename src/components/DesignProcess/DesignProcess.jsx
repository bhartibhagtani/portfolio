
import React from 'react'
import { Box, Image, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import DesignProcessImage from "./DesignProcess.png"

const DesignProcess = () => (
  <Section.Container id="Design Process" Background={TriangleSmall}>
    <Section.Header name="6-D Design Framework" icon="🖼️" label="design" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text fontSize={[ 4 ]}>
        <p>
          {
            `
              The 6D UX design process was followed to reach
              our end goal. 6D design process is a stepwise 
              process of defining and designing the solutions.
            `
          }
        </p>
      </Text>
    </Box>
    <Box>
      <Image
        width={[1]}
        src={DesignProcessImage}
        alt="Design Process"
      />
    </Box>
  </Section.Container>
)

export default DesignProcess