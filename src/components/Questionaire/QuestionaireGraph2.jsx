
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import Graph2 from "./Graph2.png"

const QuestionaireGraph2 = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Image
        width={[1]}
        src={Graph2}
        alt="QuestionaireGraph2"
      />
    </Box>
  </Section.Container>
)

export default QuestionaireGraph2
