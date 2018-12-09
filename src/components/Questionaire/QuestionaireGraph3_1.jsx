
import React from 'react'
import { Box, Image, Flex, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph3 from "./Graph3-1.png"

const QuestionaireGraph3 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
        The chart shows the various mediums people use
        for applying for credit cards.
        </Text>
      </Box>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={Graph3}
          width="100vw"
          alt="QuestionaireGraph3"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            How do people apply for credit card?
            `
          }
            </i>

          </p>
        </Text>
      </Box>
    </Flex>
  </Section.Container>
)

export default QuestionaireGraph3
