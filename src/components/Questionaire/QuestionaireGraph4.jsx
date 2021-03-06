
import React from 'react'
import { Box, Image, Text, Flex } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import Graph4 from "./Graph4.png"

const QuestionaireGraph4 = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
          <b> 56.3% </b>
          users said they will be convenient in uploading the required 
          documents for credit card procedure through mobile banking.
        </Text>
      </Box>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={Graph4}
          width="100vw"
          alt="QuestionaireGraph3"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            How convenient will the people be to upload documents through mobile banking for the credit card procedure?
            `
          }
            </i>

          </p>
        </Text>
      </Box>
    </Flex>
  </Section.Container>
)

export default QuestionaireGraph4
