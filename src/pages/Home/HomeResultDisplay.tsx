import { ICase } from "./HomeSearcher.interfaces";
import CaseCard from "../../components/CaseCard";
import { gridLayoutClass, paginationClass } from "../../components/Layout";
import styled from "@emotion/styled";
import Pagination from "react-js-pagination";

interface IHomeResultDisplayProps {
  onLoadMore: (pageNumber: number) => void;
  cases: ICase[];
  page: number;
  total: number;
  isLoading: boolean;
}

const Section = styled("section")`
  width: 100%;
  min-height: 400px;
  display: block;
`;

const HomeResultDisplay = ({
  cases,
  isLoading,
  onLoadMore,
  page,
  total,
}: IHomeResultDisplayProps) => {
  const resultLength = cases.length;

  if (isLoading) {
    return <h3>Loading ⚡️</h3>;
  }

  if (!isLoading && resultLength === 0) {
    return <h3>No results 🔍</h3>;
  }

  return (
    <Section>
      <div className={gridLayoutClass}>
        {cases.map((repo: ICase) => (
          <CaseCard key={repo.id} case={repo} />
        ))}
      </div>
      <Pagination
        innerClass={paginationClass}
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={total}
        pageRangeDisplayed={3}
        onChange={onLoadMore}
        prevPageText="< Prev"
        firstPageText="<< First"
        lastPageText="Last >>"
        nextPageText="Next >"
      />
    </Section>
  );
};
export default HomeResultDisplay;
