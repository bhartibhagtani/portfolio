
import React from 'react'
import { Box, Image, Flex, Text } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import Graph2 from "./Graph2-2.png"

const QuestionaireGraph2 = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
          <b> 58.3% </b>
users said they use credit cards.
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
            Count of people using credit cards.
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
