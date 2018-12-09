
import React from 'react'
import { Box, Image } from 'rebass';
import Section from '../Section';
import TriangleLarge from '../Triangle/TriangleLarge';
import CreditCard from "./CreditCard.png"

const TaskAnalysisFlowCreditCard = () => (
  <Section.Container id="" Background={TriangleLarge}>
    <Section.Header name="TaskAnalysisFlow - Credit Card" icon="📈" label="TaskAnalysisFlow" />
    <Box mt="30px">
      <Image
        src={CreditCard}
        alt="TaskAnalysisFlow"
      />
    </Box>
  </Section.Container>
)

export default TaskAnalysisFlowCreditCard
