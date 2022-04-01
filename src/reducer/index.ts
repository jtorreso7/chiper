import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  SEARCH_CASES_LOADING,
  SEARCH_CASES_DATA_SUCCESS,
  SEARCH_CASES_DATA_ERROR,
} from "../actions/action-types";
import { FIRST_PAGE_NUMBER } from "../const";
import { ICase } from "../pages/Home/HomeSearcher.interfaces";
import { AnyAction } from "redux";

interface IState {
  items: ICase[];
  query: string;
  isLoading: boolean;
  errorMessage: string;
  total: number;
  page: number;
  appendToState: boolean;
}

export const initialState = {
  items: [],
  query: "",
  isLoading: false,
  errorMessage: "",
  page: FIRST_PAGE_NUMBER,
  total: 0,
  appendToState: false,
};

const rootReducer = (state: IState | undefined, action: AnyAction) => {
  const { payload, type } = action;
  const { query, items, page, total, errorMessage } =
    payload || {};

  if (state === undefined) {
    return initialState;
  }

  switch (type) {
    case SEARCH_CASES_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    case SEARCH_CASES_DATA_SUCCESS:
      return {
        ...state,
        items: items,
        total,
        page,
        query,
        isLoading: false,
        errorMessage: "",
      };

    case SEARCH_CASES_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage,
      };

    default:
      return initialState;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
