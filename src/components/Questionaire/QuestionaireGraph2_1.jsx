
import React from 'react'
import { Box, Image, Flex, Text } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph2 from "./Graph2-1.png"

const QuestionaireGraph2 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
        The graph shows the most used features
        by mobile banking users-
        </Text>
      </Box>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={Graph2}
          width="100vw"
          alt="QuestionaireGraph2"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            People using mobile banking for?
            `
          }
            </i>

          </p>
        </Text>
      </Box>
    </Flex>
  </Section.Container>
)

export default QuestionaireGraph2
