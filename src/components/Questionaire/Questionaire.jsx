
import React from 'react'
import { Box, Image, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import QuestionaireImage from "./Questionaire.png"

const Questionaire = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="Questionaire" icon="❓" label="questionaire" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text fontSize={[ 4 ]}>
        <p>
          {
            `
              An online survey was created for the user
              research, to gather more information on 
              how the users are using banking services
              and what are their needs. The following 
              are the questions asked to the users-
            `
          }
        </p>
      </Text>
      <br />
    </Box>
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
