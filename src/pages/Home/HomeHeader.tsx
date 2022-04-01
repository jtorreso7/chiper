import React from "react";
import { Flex, Box } from "rebass";
import styled from "@emotion/styled";

const Heading = styled("h2")`
  margin: 0;
  font-size: 3rem;
`;

const SubHeading = styled("span")`
  color: #878787;
  font-size: 14px;
  font-weight: 500;
  font-size: 2rem;
`;

const Image = styled("img")`
  width: 100px;
  height: auto;
`;

const HomeHeader = () => (
  <Flex alignItems="center">
    <Image alt="Github Logo" src="./images/police-badge.png" />
    <Box pl={3}>
      <Heading>Police Department of Berlin</Heading>
      <SubHeading>Stolen bykes</SubHeading>
    </Box>
  </Flex>
);

export default HomeHeader;
