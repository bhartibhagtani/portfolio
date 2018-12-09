
import React from 'react'
import { Box, Image } from 'rebass';
import TriangleSmall from '../Triangle/TriangleSmall';
import Section from '../Section';
import WireframeImage from "./Wireframe.png"

const Wireframes = () => (
  <Section.Container id="Design" Background={TriangleSmall}>
    <Section.Header name="Wireframes" icon="✏️" label="wireframes" />
    <Box mt="30px">
      <Image
        src={WireframeImage}
        alt="VisualDesign"
      />
    </Box>
  </Section.Container>
)

export default Wireframes