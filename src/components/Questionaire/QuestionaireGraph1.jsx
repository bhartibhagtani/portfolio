
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph1 from "./Graph1.png"

const QuestionaireGraph1 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Image
        width={[1]}
        src={Graph1}
        alt="QuestionaireGraph1"
      />
    </Box>
  </Section.Container>
)

export default QuestionaireGraph1
