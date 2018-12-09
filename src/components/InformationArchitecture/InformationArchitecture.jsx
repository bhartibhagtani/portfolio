
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import InformationArchitectureImage from "./InformationArchitecture.png"

const InformationArchitecture = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Section.Header name="Information Architecture" icon="🧰" label="InformationArchitecture" />
    <Box mt="30px">
      <Image
        src={InformationArchitectureImage}
        alt="InformationArchitecture"
      />
    </Box>
  </Section.Container>
)

export default InformationArchitecture
