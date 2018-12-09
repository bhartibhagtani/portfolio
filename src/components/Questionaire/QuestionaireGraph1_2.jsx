
import React from 'react'
import { Box, Image, Flex, Text } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import Graph1 from "./Graph1-2.png"

const QuestionaireGraph1 = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Text fontSize={[ 30 ]}>
        Most of the users said they use mobile banking 
        services to
          <br />
          {' '}
          <b>
            save time

          </b>
          {' '}
          and its
          {' '}
          <b>easy to use</b>
          .
        </Text>
      </Box>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={Graph1}
          width="100vw"
          alt="QuestionaireGraph2"
        />
        <Text fontSize={[ 2 ]} align="center">
          <p>
            <i>
              {
            `
            Factors that promote users to use mobile banking services.
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
