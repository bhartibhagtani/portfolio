
import React from 'react'
import { Box, Image, Flex } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import UserSaloni from "./UserSaloni.png"
import UserAbhishek from "./UserAbhishek.png"
import UserAchintya from "./UserAchintya.png"

const UserSegmentation = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="User Segmentation" icon="🍽️" label="design" />
    <Flex flexWrap="wrap">
      <Box width={[1, 1, 2 / 6]}>
        <Image
          src={UserSaloni}
          alt="Design Process"
        />
      </Box>
      <Box width={[1, 1, 2 / 6]}>
        <Image
          src={UserAbhishek}
          alt="Design Process"
        />
      </Box>
      <Box width={[1, 1, 2 / 6]} mt="7px">
        <Image
          src={UserAchintya}
          alt="Design Process"
        />
      </Box>
    </Flex>
  </Section.Container>
)

export default UserSegmentation