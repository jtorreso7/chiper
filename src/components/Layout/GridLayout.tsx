import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Flex } from "rebass";

const gridLayoutClass = css`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
`;

const paginationClass = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 34px auto;
  list-style: none;

  li {
    &.active {
      a {
        border: 1px solid #db8129;
        border-radius: 100%;
      }
    }
  }

  a {
    text-decoration: none;
    color: #db8129;
    padding: 10px;
    min-width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    font-weight: 600;
  }
`;

const GridContainer = styled(Flex)`
  border: 1px solid #bcbec0;
  padding: 10px;
  align-items: center;
  border-radius: 3px;
  transition: background 300ms;
  display: flex;
  width: 100%;
  color: #1e1e1e;
  &:hover {
    background: #ededed;
  }
`;

export { gridLayoutClass, GridContainer, paginationClass };
