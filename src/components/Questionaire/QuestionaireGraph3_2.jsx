
import React from 'react'
import { Box, Image, Text, Flex } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import Graph3 from "./Graph3-2.png"

const QuestionaireGraph3 = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
          <b> 68.8% </b>
          users said they would prefer paperless approval for
          applying for credit cards.
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
            Would people preper paperless approval for credit card?
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
