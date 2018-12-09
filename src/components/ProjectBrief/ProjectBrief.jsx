import React from 'react'
import { Box, Image, Flex, Text } from 'rebass';
import AxisSplash from "../Logo/AxisSplash.png";
import Section from '../Section';
import TriangleLanding from '../Triangle/TriangleLanding';

const ProjectBrief = () => (
  <Section.Container id="home" Background={TriangleLanding}>
    <Flex alignItems="center">
      <div>
        <Section.Header name="Project Brief" icon="🗒️️" label="brief" />
        <Flex flexWrap="wrap">
          <Box px={[1, 2, 4]}>
            <Text lineHeight="1.6" fontSize={[ 4 ]}>
              To study the android app of  Axis bank
              and redesign the Application Experience.
              <br />
              <br />
              Functionality to be focused on:
              <ol>
                <li>
                  Dashboard
                </li>
                <li>
                  Applying for Credit Cards
                </li>
              </ol>
            </Text>
          </Box>
        </Flex>
      </div>
      <Box width={[0.5, 1, 2 / 6]}>
        <Image
          src={AxisSplash}
          width="100vw"
          alt="Axis Splash Screen"
        />
      </Box>
    </Flex>
  </Section.Container>
)

export default ProjectBrief