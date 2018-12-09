
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import StoryboardImage from "./Storyboard.png"

const Storyboard = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Section.Header name="Storyboard" icon="🔲" label="storyboard" />
    <Box mt="30px">
      <Image
        src={StoryboardImage}
        alt="Storyboard"
      />
    </Box>
  </Section.Container>
)

export default Storyboard
