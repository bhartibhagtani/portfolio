
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import DesignProcessImage from "./DesignProcess.png"

const DesignProcess = () => (
  <Section.Container id="Design Process" Background={TriangleSmall}>
    <Section.Header name="6-D Design Framework" icon="🖼️" label="design" />
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