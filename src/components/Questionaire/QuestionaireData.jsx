
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import QuestionaireGraph1 from './QuestionaireGraph1'
import QuestionaireGraph2 from './QuestionaireGraph2'
import QuestionaireGraph3 from './QuestionaireGraph3'
import QuestionaireGraph4 from './QuestionaireGraph4'
import QuestionaireDataImage from "./QuestionaireData.png"

const QuestionaireData = () => (
  <React.Fragment>
    <Section.Container id="" Background={TriangleLarge}>
      <Section.Header name="QuestionaireData" icon="📊" label="questionaireData" />
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Image
          width={[1]}
          src={QuestionaireDataImage}
          alt="QuestionaireData"
        />
      </Box>
    </Section.Container>
    <QuestionaireGraph1 />
    <QuestionaireGraph2 />
    <QuestionaireGraph3 />
    <QuestionaireGraph4 />
  </React.Fragment>
)

export default QuestionaireData
