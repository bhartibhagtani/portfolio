
import React from 'react'
import { Box, Image, Text, Flex } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph1 from "./Graph1-1.png"

const QuestionaireGraph1 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
          <b> 93.8% </b>
users said they use mobile banking services.
        </Text>
      </Box>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={Graph1}
          width="100vw"
          alt="QuestionaireGraph1"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            Number of users using mobile banking services.
            `
          }
            </i>

          </p>
        </Text>
      </Box>
    </Flex>
  </Section.Container>
)

export default QuestionaireGraph1
