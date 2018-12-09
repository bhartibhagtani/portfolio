
import React from 'react'
import { Box, Image } from 'rebass';
import TriangleSmall from '../Triangle/TriangleSmall';
import Section from '../Section';
import VisualDesignImage from "./VisualDesign.png"

const VisualDesign = () => (
  <Section.Container id="Develop" Background={TriangleSmall}>
    <Section.Header name="Visual Designs" icon="🖌️" label="visualdesign" />
    <Box mt="30px">
      <Image
        src={VisualDesignImage}
        alt="VisualDesign"
      />
    </Box>
  </Section.Container>
)

export default VisualDesign