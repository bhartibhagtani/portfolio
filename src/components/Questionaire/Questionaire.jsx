
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import QuestionaireImage from "./Questionaire.png"

const Questionaire = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="Questionaire" icon="❓" label="questionaire" />
    <Box>
      <Image
        width={[1]}
        src={QuestionaireImage}
        alt="Questionaire"
      />
    </Box>
  </Section.Container>
)

export default Questionaire
