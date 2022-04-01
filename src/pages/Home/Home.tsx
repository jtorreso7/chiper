import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Flex } from "rebass";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

import { searchCases, searchNextUsers } from "../../actions";
import { ICase } from "./HomeSearcher.interfaces";
import HomeResultDisplay from "./HomeResultDisplay";

import HomeHeader from "./HomeHeader";
import HomeSearchInput from "./HomeSearchInput";

interface IHomeSearchProps {
  searchCases?: Function;
  searchNextUsers?: Function;
  searchRepo?: Function;
  searchNextRepos?: Function;
  items?: ICase[];
  total?: number;
  page?: number;
  isLoading?: boolean;
  errorMessage?: string;
}

interface ISearchContainerProps {
  hasInputValue: boolean;
}

const SearchContainer = styled(Flex)<ISearchContainerProps>`
  height: 80vh;
  justify-content: center;
  width: 80%;
  max-width: 1020px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  padding: 24px;
  width: 100%;
  height: 100%;
`;

const Search = styled(Flex)`
  width: 100%;
`;

const Error = styled("div")`
  color: red;
  font-weight: bold;
`;

const corner = css`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Home = (props: IHomeSearchProps) => {
  const {
    items = [],
    searchCases = () => {},
    searchNextUsers = () => {},
    errorMessage = "",
    isLoading = false,
    page = 1,
    total = 1,
  } = props;

  const [query, setQuery] = useState<string>("");

  const caseList = items;

  // call whenever the entity or search term changes
  useEffect(() => {
    const fetchData = () => {
      searchCases(query);
    };
    fetchData();
  }, []);

  const handleInputChange = (value: string) => {
    debugger
    if (!value) {
      setQuery("");
      return;
    }
    setQuery(value);
    searchCases(value);
  };

  const handleNextPageLoad = (pageNumber: number) => {
    searchNextUsers(query, pageNumber);
  };

  return (
    <SearchContainer flexDirection="column" hasInputValue={query.length !== 0}>
      <Search flexDirection="column">
        <HomeHeader />
        <HomeSearchInput onInputChange={handleInputChange} />
      </Search>
      {!errorMessage && (
        <Flex mt={3}>
          <HomeResultDisplay
            isLoading={isLoading}
            onLoadMore={handleNextPageLoad}
            cases={caseList}
            page={page}
            total={total}
          />
        </Flex>
      )}
      {errorMessage && (
        <Flex mt={3}>
          <Error>{errorMessage}</Error>
        </Flex>
      )}
    </SearchContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchCases: (term: any) => dispatch(searchCases(term)),
    searchNextUsers: (query: string, pageNumber: number) =>
      dispatch(searchNextUsers(query, pageNumber)),
  };
};
const mapStateToProps = (state: any) => state;

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeConnected;
