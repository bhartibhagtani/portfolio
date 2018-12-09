
import React from 'react'
import { Box, Image, Flex } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import PersonaSaloni from "./PersonaSaloni.png"
import PersonaAbhishek from "./PersonaAbhishek.png"
import PersonaAchintya from "./PersonaAchintya.png"

const Personas = () => (
  <Section.Container id="Define" Background={TriangleSmall}>
    <Section.Header name="Personas" icon="🎭" label="personas" />
    <Flex flexDirection="column" alignItems="center" flexWrap="wrap">
      <Box mt="30px">
        <Image
          css={{
          border:'1px solid black'
        }}
          width="1034px"
          src={PersonaSaloni}
          alt="Personas"
        />
      </Box>
      <Box mt="70px">
        <Image
          css={{
            border:'1px solid black'
          }}
          width="1034px"
          src={PersonaAbhishek}
          alt="Personas"
        />
      </Box>
      <Box mt="70px">
        <Image
          css={{
            border:'1px solid black'
          }}
          width="1034px"
          src={PersonaAchintya}
          alt="Personas"
        />
      </Box>
    </Flex>
  </Section.Container>
)

export default Personas