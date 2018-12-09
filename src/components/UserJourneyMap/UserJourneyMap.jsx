
import React from 'react'
import { Box, Image } from 'rebass';
import Section from "../Section";
import TriangleLarge from "../Triangle/TriangleLarge";
import UserJourneyMapImage from "./UserJourneyMap.png"

const UserJourneyMap = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Section.Header name="User Journey Map" icon="🚌" label="journeymap" />
    <Box mt="30px">
      <Image
        src={UserJourneyMapImage}
        alt="UserJourneyMap"
      />
    </Box>
  </Section.Container>
)

export default UserJourneyMap
