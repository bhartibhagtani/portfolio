
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleSmall from '../Triangle/TriangleSmall';
import UserLogin from "./UserLogin.png"

const TaskAnalysisFlowUserLogin = () => (
  <Section.Container id="" Background={TriangleSmall}>
    <Section.Header name="TaskAnalysisFlow - UserLogin" icon="📈" label="TaskAnalysisFlow" />
    <Box mt="30px">
      <Image
        src={UserLogin}
        alt="TaskAnalysisFlow"
      />
    </Box>
  </Section.Container>
)

export default TaskAnalysisFlowUserLogin
