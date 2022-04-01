import styled from "@emotion/styled";
import { Flex, Box } from "rebass";

import { ICase } from "../pages/Home/HomeSearcher.interfaces";
import { GridContainer } from "./Layout/GridLayout";

const Image = styled("img")`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const User = (props: { case: ICase }) => {
  const {
    case: {
      large_img = "./images/police-badge.png",
      title,
      description,
      date_stolen,
      stolen_location,
    },
  } = props;

  return (
    <GridContainer>
      <Flex flexDirection="row" pl={3}>
        <Box>
          <Image alt="Github Logo" src={large_img} />
        </Box>
        <Box>
          <b>Stolen {title}</b>
          <br />
          <b>Description:</b> {description} <br />
          <b>Language:</b> {date_stolen} <br />
          {stolen_location}
          <br />
        </Box>
      </Flex>
    </GridContainer>
  );
};

export default User;
