import { Flex, Box } from "rebass";
import styled from "@emotion/styled";
import { ICase } from "../pages/Home/HomeSearcher.interfaces";
import { GridContainer } from "./Layout/GridLayout";

const Image = styled("img")`
  width: 100px;
  height: auto;
  border-radius: 6px;
`;

const CaseCard = (props: { case: ICase }) => {
  const defaultImage = "./images/cyclist.png";
  const {
    case: {
      large_img = defaultImage,
      title,
      description,
      date_stolen,
      stolen_location,
    },
  } = props;
  return (
    <GridContainer>
      <Flex width="20%" justifyContent="center">
        <Image alt="Github Logo" src={large_img || defaultImage} />
      </Flex>
      <Box width="60%">
        <h3>Stolen {title}</h3>
        <p>
          {description ||
            `Registry without description about this case in the dataBase of the police of Berlin.`}
        </p>
        <p>
          {`${date_stolen || "Not has date"} - ${
            stolen_location || ` No location.`
          }`}
        </p>
      </Box>
    </GridContainer>
  );
};

export default CaseCard;
