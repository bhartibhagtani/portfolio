
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph3 from "./Graph3.png"

const QuestionaireGraph3 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Image
        width={[1]}
        src={Graph3}
        alt="QuestionaireGraph3"
      />
    </Box>
  </Section.Container>
)

export default QuestionaireGraph3
