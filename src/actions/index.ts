import delve from "dlv";
import { Dispatch } from "redux";

import { FIRST_PAGE_NUMBER } from "../const";
import { IAction } from "../pages/Home/HomeSearcher.interfaces";
import { searchFetch } from "../services";
import {
  SEARCH_CASES_LOADING,
  SEARCH_CASES_DATA_SUCCESS,
  SEARCH_CASES_DATA_ERROR,
} from "./action-types";

const initialPayload = {
  isLoading: false,
  page: FIRST_PAGE_NUMBER,
  appendToState: false,
  errorMessage: "",
  query: "",
  items: [],
};

const searchCases = (query: string) => {
  return async (dispatch: Dispatch<IAction>, getState: Function) => {
    dispatch({
      type: SEARCH_CASES_LOADING,
      payload: {
        ...initialPayload,
        isLoading: true,
      },
    });
    try {
      const response = await searchFetch(query, FIRST_PAGE_NUMBER);
      dispatch({
        type: SEARCH_CASES_DATA_SUCCESS,
        payload: {
          ...initialPayload,
          items: response.items,
          total: parseInt(response.total, 10),
          page: FIRST_PAGE_NUMBER,
          query,
          appendToState: true,
        },
      });
    } catch (errorMessage: any) {
      dispatch({
        type: SEARCH_CASES_DATA_ERROR,
        payload: {
          ...initialPayload,
          errorMessage,
        },
      });
    }
  };
};

const searchNextUsers = (query: string, pageNumber: number) => {
  return async (dispatch: Dispatch<IAction>, getState: Function) => {
    dispatch({
      type: SEARCH_CASES_LOADING,
      payload: {
        ...initialPayload,
        isLoading: true,
      },
    });

    try {
      const response = await searchFetch(query, pageNumber);
      dispatch({
        type: SEARCH_CASES_DATA_SUCCESS,
        payload: {
          ...initialPayload,
          items: response.items,
          page: pageNumber,
          query,
          total: response.total,
          appendToState: true,
        },
      });
    } catch (errorMessage: any) {
      dispatch({
        type: SEARCH_CASES_DATA_ERROR,
        payload: {
          ...initialPayload,
          errorMessage,
        },
      });
    }
  };
};

export { searchCases, searchNextUsers };
