
import React from 'react'
import { Box, Text } from 'rebass';
import Section from "../Section";
import TriangleSmall from "../Triangle/TriangleSmall";

const UserScenario = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="User Scenario" icon="🎑" label="plan" />
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
      <Text lineHeight="1.6" fontSize={[ 4 ]}>
        <p>
          {
            `
            Saloni is an IT professional and keeps busy with her job. 
            One day in office she thinks about the struggle she has in
            managing her finances also she thinks of buying a new phone
            as her phone is in a bad condition. But she is upset as she does
            not get time to go and explore the options of buying a new
            phone in her budget.
            `
          }
        </p>
        <p>
          {
            `
            Next morning while scrolling the amazon app on her phone she
            finds some offers on mobile phones on Axis credit card.
            She does not has the time to do the manual procedure and
            opens the Axis mobile app and follows the credit card application
            procedure, she’s happy how the process is easy and all can be done
            through the app. Her credit card arrives in a week and she’s happily
            orders a new phone for herself.
            `
          }
        </p>
      </Text>
    </Box>
  </Section.Container>
)

export default UserScenario