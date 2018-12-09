
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import Graph4 from "./Graph4.png"

const QuestionaireGraph4 = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Image
        width={[1]}
        src={Graph4}
        alt="QuestionaireGraph4"
      />
    </Box>
  </Section.Container>
)

export default QuestionaireGraph4
