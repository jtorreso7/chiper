const SUPPORTED_ENTITIES: { [key: string]: string } = {
  USERS: 'USERS',
  REPO: 'REPO'
}

const API_SEARCH_KEYS: { [key: string]: string } = {
  USERS: 'users',
  REPO: 'repositories'
}

const ITEMS_PER_PAGE = 10;
const FIRST_PAGE_NUMBER = 1;
const BASE_URL = 'https://bikeindex.org:443/api/v3';

export {
  SUPPORTED_ENTITIES,
  API_SEARCH_KEYS,
  FIRST_PAGE_NUMBER,
  BASE_URL,
  ITEMS_PER_PAGE
}