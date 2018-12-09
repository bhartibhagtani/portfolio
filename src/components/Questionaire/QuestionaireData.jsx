
import React from 'react'
import { Box, Image, Text } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import QuestionaireGraph1 from './QuestionaireGraph1_1'
import QuestionaireGraph2 from './QuestionaireGraph1_2'
import QuestionaireGraph3 from './QuestionaireGraph2_1'
import QuestionaireGraph4 from './QuestionaireGraph2_2'
import QuestionaireGraph5 from './QuestionaireGraph3_1'
import QuestionaireGraph6 from './QuestionaireGraph3_2'
import QuestionaireGraph7 from './QuestionaireGraph4'
import QuestionaireDataImage from "./QuestionaireData.png"

const QuestionaireData = () => (
  <React.Fragment>
    <Section.Container id="" Background={TriangleLarge}>
      <Section.Header name="Questionaire Data" icon="📊" label="questionaireData" />
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]} fontWeight="bold" align="center">
          <p>
            {
            `
            “Surveys help you get a lot of feedback at once.”
            `
          }
          </p>
        </Text>
        <br />
        <Text fontSize={[ 4 ]}>
          <p>
            {
            `
            The online survey generated an overwhelming amount of 
            information. It gave the insights of the goal to 
            redesign the credit card application flow and
            how the users will prefer it to be. 
            `
          }
          </p>
          <br />
          <p>
            {
            `
            Let us look at the statistics of the survey-
            `
          }
          </p>
        </Text>
      </Box>
      <br />
      <br />
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Image
          width={[1]}
          src={QuestionaireDataImage}
          alt="QuestionaireData"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            Approximately, 50 users took the online survey.
            `
          }
            </i>

          </p>
        </Text>
      </Box>
    </Section.Container>
    <QuestionaireGraph1 />
    <QuestionaireGraph2 />
    <QuestionaireGraph3 />
    <QuestionaireGraph4 />
    <QuestionaireGraph5 />
    <QuestionaireGraph6 />
    <QuestionaireGraph7 />
  </React.Fragment>
)

export default QuestionaireData
